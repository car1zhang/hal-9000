'use client'
import React from 'react'

export default function Slot({ attribute }) {
  
  const [on, setOn] = React.useState(true)

  function toggle() {
    if(on) {
      setOn(false)
      fetch("http://localhost:8000/"+attribute, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({value: -1})
      })
    } else {
      setOn(true)
      fetch("http://localhost:8000/"+attribute, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({value: 1})
      })
    }
  }

  return (
    <div className="flex flex-col">
      <div className={(on ? "bg-zinc-100 border-zinc-300" : "bg-black border-black") + " border-4 p-4 m-4 h-36"} />
      <button onClick={toggle} className="bg-red-400 border-red-600 border-4 p-4 m-4 mt-0"></button>
    </div>
  )
}
