from fastapi import APIRouter
from datetime import date, datetime
from supabase import create_client, Client
from dotenv import load_dotenv
import os
load_dotenv()

router = APIRouter()
supabase: Client = create_client(os.environ.get("SUPABASE_URL"), os.environ.get("SUPABASE_KEY"))

@router.get("/add_stock")
async def add_stock(uuid: str, stock_name: str, qty: int, stock_price: float):
    response = supabase.table('stocks').insert({
        'client': uuid,
        'stock_name': stock_name,
        'qty': qty,
        'investment': stock_price * qty,
        'last_transaction_date' : datetime.now().strftime(r"%Y-%m-%d") 
        
    }).execute()
    supabase.table('logs').insert({
        'stock_id' : response.data[0]['stock_id'],
        'qty' :qty,
        'total_qty' : qty,
        'current_price' : stock_price,
        'final_investment' : stock_price * qty
    }).execute()
    return {"message": "Stock added successfully", "data": response.data}

#fetchinggg
@router.get("/stocks")
async def user_stocks(uuid: str):
    response = supabase.table('stocks').select("*").eq('client', uuid).execute()

    return {"stocks": response.data}

# 2. Updating stocks
@router.get("/update_stock/")
async def update_stock(stock_id: str, qty: int, price: float):
    existing_stock = supabase.table('stocks').select("*").eq('stock_id', stock_id).execute().data[0]
    
    update_data = {
        'qty': qty + existing_stock['qty'],
        'investment': existing_stock['investment'] + price * qty,
        'last_transaction_date': datetime.now().strftime(r"%Y-%m-%d")
    }

    response = supabase.table('stocks').update(update_data).eq('stock_id', stock_id).execute()
    supabase.table('logs').insert({
        'stock_id' : response.data[0]['stock_id'],
        'qty' :qty,
        'total_qty' : response.data[0]['qty'],
        'current_price' : price,
        'final_investment' : response.data[0]['investment']
    }).execute()
    return {"message": "Stock updated successfully", "data": response.data}

@router.get("/sell_stock")
async def sell_stock(stock_id: str , price: float):
    existing_stock = supabase.table('stocks').select("*").eq('stock_id', stock_id).execute().data[0]
    supabase.table('logs').delete().eq('stock_id', stock_id).execute()
    supabase.table('logs').insert({
        'stock_id' : existing_stock['stock_id'],
        'qty' : existing_stock['qty'],
        'total_qty' : 0,
        'current_price' : price,
        'final_investment' : existing_stock['investment'] - existing_stock['qty'] * price,
    }).execute()
    return {"message": "Stock sold successfully", "final_sell_price": existing_stock['qty'] * price , "data": existing_stock}

    
    