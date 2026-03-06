from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import random

app = FastAPI()

@app.get("/rand_int")
def get_rand_int():
    n = random.randint(0,12)
    return n

@app.get("/rand_mult")
def get_rand_mult():
    n1 = random.randint(0,12)
    n2 = random.randint(0,12)
    return({"n1":n1,"n2":n2})

app.mount("/", StaticFiles(directory="static", html=True), name="static")