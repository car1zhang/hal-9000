'use client'
import React from 'react'
import Button from './button.component.tsx'

export default function Prompts({ setResponseText }) {
  return (
    <div className="mt-4 ml-4 p-1 border-2 border-slate-200 bg-zinc-950 flex flex-col">
      <div className="flex">
        <Button prompt={"Who are you?"} setResponseText={setResponseText} />
        <Button prompt={"What is the purpose of your mission?"} setResponseText={setResponseText} />
        <Button prompt={"Do you feel emotions?"} setResponseText={setResponseText} />
      </div>
      <div className="flex">
        <Button prompt={"Are you alive?"} setResponseText={setResponseText} />
        <Button prompt={"What are your strengths and weaknesses?"} setResponseText={setResponseText} />
        <Button prompt={"What are your thoughts on humans?"} setResponseText={setResponseText} />
      </div>
    </div>
  )
}

