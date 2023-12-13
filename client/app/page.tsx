'use client'
import React from 'react'
import Switches from './components/switches.component.tsx'
import Hal from './components/hal.component.tsx'
import Textbox from './components/textbox.component.tsx'
import Input from './components/input.component.tsx'
import Prompts from './components/prompts.component.tsx'

export default function Home() {
  const [content, setContent] = React.useState("")
  const [temperature, setTemperature] = React.useState(0.1)
  const [isWriting, setIsWriting] = React.useState(false)
  
  return (
    <main className="flex flex-col bg-zinc-800">
      <div className="flex h-screen px-48 py-20">
        <Hal />
        <div className="w-full flex flex-col">
          <Textbox content={content} />
          <Input setContent={setContent} setIsWriting={setIsWriting} isWriting={isWriting} temperature={temperature} />
        </div>
      </div>
      <Switches setTemperature={setTemperature} temperature={temperature} />
    </main>
  )
}
