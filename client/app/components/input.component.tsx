'use client'
import React from 'react'
import { fetchEventSource } from '@microsoft/fetch-event-source'

export default function Input({ setContent, setIsWriting, isWriting, temperature }) {

  const [prompt, setPrompt] = React.useState("")

  async function submit(e) {
    e.preventDefault()

    if(prompt == "") return
    if(isWriting) return
    if(temperature >= 2) {
      setContent("HAL 9000 has been deactivated...")
      return
    }

    setIsWriting(true)
    setContent("...")
    await fetchEventSource("http://localhost:8000/", {
      method: "POST",
      headers: {
        'Accept': "text/event-stream",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        body: prompt,
        temperature: temperature
      }),
      onmessage(event) {
        setContent(event.data)
      }
    })
    setIsWriting(false)
  }

  return (
    <form autoComplete="off" className="mt-4 ml-4 p-7 border-2 border-slate-200 bg-zinc-950 flex" onSubmit={submit}>
      <fieldset className="self-center grow m-1">
        <input name="prompt" autoComplete="false" className="w-full bg-blue-400 border-4 border-blue-800 rounded-lg font-mono p-2 text-xs" onChange={e => setPrompt(e.target.value)} />
      </fieldset>
      <button type="submit" className="border-4 border-yellow-500 bg-yellow-300 p-4 m-1" />
    </form>
  )
}
