from fastapi import FastAPI
from pydantic import BaseModel, Extra
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
)

class User(BaseModel, extra=Extra.forbid):
    id: str
    name: str


@app.get("/users/{id}", response_model=User)
async def user(id: str) -> User:
    return User(id=id, name="Lorem ipsum")
