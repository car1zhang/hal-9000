import Image from 'next/image'
import lens from '@/public/hal.png'

export default function Hal() {
  return (
    <div className="p-7 flex" >
      <Image src={lens} alt="HAL 8000" className="self-start h-full" />
    </div>
  )
}
