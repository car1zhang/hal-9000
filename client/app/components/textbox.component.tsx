'use client'
import React from 'react'

export default function Textbox({ content }) {
  return (
    <div className="ml-4 mb-4 p-8 h-full border-2 border-slate-200 bg-zinc-950 font-mono">
      <div className="p-6 h-full bg-blue-400 rounded-lg">
        >_ {content}
      </div>
    </div>
  )
}
