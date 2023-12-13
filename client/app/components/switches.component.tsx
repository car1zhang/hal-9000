'use client'
import React from 'react'
import Slot from './slot.component.tsx'

export default function Switches({ setTemperature, temperature }) {
  return (
    <div className="p-8 border-2 border-slate-200 flex justify-center">
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
      <Slot setTemperature={setTemperature} temperature={temperature} />
    </div>
  )
}

