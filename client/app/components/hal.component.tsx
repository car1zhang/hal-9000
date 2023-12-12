import Image from 'next/image'
import lens from '@/public/hal.png'

export default function Hal() {
  return (
    <div className="mr-4 p-16 border-2 border-slate-200 bg-zinc-950 flex" >
      <Image src={lens} alt="HAL 8000" height="380" className="self-center" />
    </div>
  )
}
