'use client'
import React from 'react'
import Slot from './slot.component.tsx'

export default function Switches() {
  return (
    <div className="flex flex-col bg-zinc-950">
      <div className="flex px-48 pt-16 border-2 border-red-500">
        <div className="text-xl text-red-500 grow border-2 border-red-500 border-b-0 pt-16 p-3 mr-4">
          Logical<br />Terminal
        </div>
        <div className="text-xl text-red-500 grow border-2 border-red-500 border-b-0 pt-16 p-3 mr-4">
          Emotional<br />Terminal
        </div>
        <div className="text-xl text-red-500 grow border-2 border-red-500 border-b-0 pt-16 p-3">
          Langauge<br />Terminal
        </div>
      </div>
      <div className="px-48 py-3 bg-red-500 flex justify-center w-full">
        <div className="flex justify-center bg-zinc-950 w-full">
          <div className="flex grow justify-start mr-4 border-2 border-zinc-950">
            <Slot attribute="logic" />
            <Slot attribute="logic" />
          </div>
          <div className="flex grow justify-start mr-4 border-2 border-zinc-950">
            <Slot attribute="emotion" />
            <Slot attribute="emotion" />
          </div>
          <div className="flex grow justify-start border-2 border-zinc-950">
            <Slot attribute="language" />
            <Slot attribute="language" />
          </div>
        </div>
      </div>
    </div>
  )
}
