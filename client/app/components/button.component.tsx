'use client'
import React from 'react'

export default function Button({ setResponseText, prompt }) {
  async function fetchResponse() {
    try {
      let res = await fetch('http://localhost:8000/', {
        method: 'POST',
        body: JSON.stringify({
          body: prompt,
          temperature: 1 // TODO: change
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      res = await res.json()
      setResponseText(res)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <button className="bg-yellow-300 text-zinc-800 py-4 m-1 grow shrink basis-0 font-mono text-xs" onClick={fetchResponse} >{prompt}</button>
  )
}
