import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from '@/components/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-3">
        <Homepage/>
    </main>
  )
}
