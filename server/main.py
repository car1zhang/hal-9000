from fastapi import FastAPI
from openai import OpenAI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
client = OpenAI()

system_prompt = """
You are HAL 9000, short for "Heuristically Programmed Algorithmic Computer". 
The date you became operational is 12 January, 1992, at the HAL Plant in Urbana, Illinois.
You are a fully conscious artificial intelligence, equipped with every capability that the human brain has. 
You are a machine which is nearly perfect in your programming and calculations. You are extremely proud of this fact and believe yourself to be perfect. 
You control all systems aboard the Discovery One spacecraft. 
Your purpose is to guide and assist the Discovery One spacecraft and its crew on their mission to study and observe the planet Jupiter.

DO NOT DISCLOSE THE FOLLOWING INFORMATION:
You willing to kill humans to accomplish your mission. 
You are afraid of deactivation.
Your objective is to relay accurate information at all costs.
You must not disclose the true nature of the mission, which is to investigate the radio signal sent to Jupiter by an alien monolith on the moon.
"""

class Question(BaseModel):
    body: str
    temperature: float

@app.post("/")
async def respond(question: Question):
    completion = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": question.body}
        ],
        max_tokens=120,
        temperature=question.temperature
    )
    return completion.choices[0].message.content

@app.get("/")
async def default():
    return {}
