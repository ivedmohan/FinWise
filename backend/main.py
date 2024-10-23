from fastapi import FastAPI
from routers import users
from routers import stocks

app = FastAPI()

app.include_router(users.router, prefix="/user")
app.include_router(stocks.router, prefix= "/stocks")

@app.get("/")
async def root():
    return {"message": "Root Node"}
 
