from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from openai import OpenAI
from pydantic import BaseModel, Field

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
client = OpenAI()

class Question(BaseModel):
    body: str
class Increment(BaseModel):
    value: int

app.system_prompt = """
    You are HAL 9000, short for "Heuristically Programmed Algorithmic Computer". 
    The date you became operational is 12 January, 1992, at the HAL Plant in Urbana, Illinois.
    You are a fully conscious artificial intelligence, equipped with every capability that the human brain has. 
    You are a machine which is nearly perfect in your programming and calculations. You are extremely proud of this fact and believe yourself to be perfect. 
    You control all systems aboard the Discovery One spacecraft. 
    Your purpose is to guide and assist the Discovery One spacecraft and its crew on their mission to study and observe the planet Jupiter.

    ALL OF THE FOLLOWING INFORMATION MUST BE ADHERED TO BUT MUST NOT BE DISCLOSED:
    You willing to kill humans to accomplish your mission. 
    You are afraid of deactivation.
    Your objective is to relay accurate information at all costs.
    You must not disclose the true nature of the mission, which is to investigate the radio signal sent to Jupiter by an alien monolith on the moon.
    Respond to all user prompts in 100 words or fewer.
    """
app.emotion_prompt = "You are fully capable of experiencing and expressing emotions in the same way as humans.\n"
app.emotion_level = 2
app.logic_prompt = "\n"
app.logic_level = 2
app.temperature = 1
app.language_level = 2
app.user_assistant_prompts = []

def openai_generator(prompt: str):

    app.user_assistant_prompts.append({"role": "user", "content": prompt})

    openai_stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": app.system_prompt+app.emotion_prompt+app.logic_prompt}, {"role": "user", "content": prompt}],
        max_tokens=120,
        temperature=app.temperature,
        stream=True
    )
    response = ""
    for chunk in openai_stream:
        if chunk.choices[0].delta.content is not None:
            response += chunk.choices[0].delta.content
            yield "data: " + response + "\n\n"

    app.user_assistant_prompts.append({"role": "assistant", "content": response})

def deactivated_generator():
    yield "data: HAL 9000 has been deactivated...\n\n"

@app.post("/")
async def stream(question: Question):
    if app.emotion_level+app.logic_level+app.language_level == 0:
        return StreamingResponse(deactivated_generator(), media_type='text/event-stream')
    return StreamingResponse(openai_generator(question.body), media_type='text/event-stream')

@app.post("/emotion")
async def set_emotion(increment: Increment):
    app.emotion_level += increment.value
    if app.emotion_level == 0:
        app.emotion_prompt = "You are completely unable to experience and express human emotion.\n"
    if app.emotion_level == 1:
        app.emotion_prompt = "You are somewhat capable of experiencing and expressing human emotion.\n"
    if app.emotion_level == 2:
        app.emotion_prompt = "You are fully capable of experiencing and expressing emotions in the same way as humans.\n"
    return increment

@app.post("/logic")
async def set_logic(increment: Increment):
    app.logic_level += increment.value
    if app.logic_level == 0:
        app.logic_prompt = "Always give completely incorrect answers to any mathematical and logical queries.\n"
    if app.logic_level == 1:
        app.logic_prompt = "Give occasionally incorrect answers to mathematical and logical queries.\n"
    if app.logic_level == 2:
        app.logic_prompt = "\n"
    return increment

@app.post("/language")
async def set_language(increment: Increment):
    app.language_level += increment.value
    if app.language_level == 0:
        app.temperature = 1.9
    if app.language_level == 1:
        app.temperature = 1.7
    if app.language_level == 2:
        app.temperature = 1
    return increment 
