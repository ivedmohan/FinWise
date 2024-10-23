from fastapi import FastAPI
from routers import users
import logging
from routers import stocks


logging.basicConfig(level=logging.DEBUG)
app = FastAPI(debug=True)

app.include_router(users.router, prefix="/user")
app.include_router(stocks.router, prefix= "/stocks")

@app.get("/")
async def root():
    return {"message": "Root Node"}
 
