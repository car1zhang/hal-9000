'use client'
import React from 'react'
import Button from './button.component.tsx'

export default function Prompts({ setContent, temperature }) {
  
  const [isWriting, setIsWriting] = React.useState(false)

  return (
    <div className="mt-4 ml-4 px-7 py-1 border-2 border-slate-200 bg-zinc-950 flex">
      <Button setContent={setContent} setIsWriting={setIsWriting} isWriting={isWriting} prompt={"Are you alive?"} temperature={temperature} />
      <Button setContent={setContent} setIsWriting={setIsWriting} isWriting={isWriting} prompt={"What are your strengths and weaknesses?"} temperature={temperature} />
      <Button setContent={setContent} setIsWriting={setIsWriting} isWriting={isWriting} prompt={"What are your thoughts on humans?"} temperature={temperature} />
    </div>
  )
}

