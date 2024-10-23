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

    return {"message": "Stock added successfully", "data": response.data}

#fetchinggg
@router.get("/stocks")
async def user_stocks(uuid: str):
    response = supabase.table('stocks').select("*").eq('client', uuid).execute()

    return {"stocks": response.data}

# 2. Updating stocks
@router.get("/update_stock/")
async def update_stock(stock_id: str, qty: int, price: float):
    existing_stock = supabase.table('stocks').select("*").eq('stock_id', stock_id).execute().data
    update_data = {
        'qty': qty,
        'investment': price * qty,
        'last_transaction_date': datetime.now().strftime(r"%Y-%m-%d")
    }

    response = supabase.table('stocks').update(update_data).eq('stock_id', stock_id).execute()

    return {"message": "Stock updated successfully", "data": response.data}



