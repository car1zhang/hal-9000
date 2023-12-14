'use client'
import React from 'react'
import { fetchEventSource } from '@microsoft/fetch-event-source'

export default function Button({ setContent, setIsWriting, isWriting, prompt }) {

  async function submit() {

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
        body: prompt
      }),
      onmessage(event) {
        setContent(event.data)
      }
    })
    setIsWriting(false)
  }

  return (
    <button className="bg-yellow-300 border-4 border-yellow-500 text-zinc-800 p-2 m-1 grow shrink basis-0 font-mono text-xs" onClick={submit}>{prompt}</button>
  )
}
