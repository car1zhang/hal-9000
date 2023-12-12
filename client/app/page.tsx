'use client'
import React from 'react'
import Switches from './components/switches.component.tsx'
import Hal from './components/hal.component.tsx'
import Textbox from './components/textbox.component.tsx'
import Prompts from './components/prompts.component.tsx'

export default function Home() {
  const [text, setText] = React.useState("")
  
  return (
    <main className="flex flex-col bg-zinc-800">
      <div className="flex h-screen px-48 py-20">
        <Hal />
        <div className="w-full flex flex-col">
          <Textbox content={text} />
          <Prompts setResponseText={setText} />
        </div>
      </div>
      <Switches />
    </main>
  )
}
