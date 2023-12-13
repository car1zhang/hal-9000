'use client'
import React from 'react'

export default function Slot({ setTemperature, temperature }) {
  
  const [on, setOn] = React.useState(true)

  function toggle() {
    if(on) {
      setOn(false)
      setTemperature(temperature + 0.2)
    } else {
      setOn(true)
      setTemperature(temperature - 0.2)
    }
  }

  return (
    <button onClick={toggle} className={(on ? "bg-red-400 border-red-600" : "bg-black border-black") + " border-4 font-mono p-4 m-4"}></button>
  )
}
