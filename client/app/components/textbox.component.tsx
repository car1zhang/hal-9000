'use client'
import React from 'react'

export default function Textbox({ content }) {

  return (
    <div className="p-7 pb-0 h-full pl-0 font-mono">
      <div className="p-6 h-full bg-blue-400 rounded-lg break-words">
        >_ {content}
      </div>
    </div>
  )
}
