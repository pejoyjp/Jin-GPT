import Image from 'next/image'

import Homepage from '@/components/Homepage'
import { Noto_Sans } from 'next/font/google'

const font = Noto_Sans({ 
  subsets: ['latin'],
  weight:['300','400','500','600']
 })

export default function Home() {
  return (
    <main className={`h-screen flex flex-col justify-center items-center gap-3 ${font.className}`}>
        <Homepage/>
    </main>
  )
}
