from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import random

app = FastAPI()

@app.get("/rand_int")
def get_rand_int():
    n = random.randint(0,12)
    return n

app.mount("/", StaticFiles(directory="static", html=True), name="static")