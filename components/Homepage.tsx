'use client'
import fetcher from '@/libs/fetcher';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr'

type Props = {}

const Homepage = (props: Props) => {
    
    const {data:chatsId} = useSWR('/api/chats',fetcher)
    const router = useRouter()
    const handleClick = async()=>{
        try{ 
            router.push(`/${chatsId}`)
        }catch(e){
            console.log(e);
        }
    }
    
  return (
    <>
        <div>
            <p className='text-4xl font-bold'>ChatGPT</p>
        </div>
        <p>你可以问？</p>
        <div className='flex flex-col items-center gap-5'>
            <div className='h-10 bg-slate-300 flex items-center px-2 hover:bg-slate-400 rounded-lg'>
            请你用js写一个get请求?
            </div>
            <div className='h-10 bg-slate-300 flex items-center px-2 hover:bg-slate-400 rounded-lg'>
            玄武门之变是怎么回事?
            </div>
            <div className='h-10 bg-slate-300 flex items-center px-2 hover:bg-slate-400 rounded-lg'>
            简介一下辛亥革命。
            </div>
        </div>

        <button onClick={handleClick}
                className='bg-sky-400 w-[100px] py-2 rounded-lg hover:bg-sky-300'>
            开始对话
        </button>
    </>
  )
}

export default Homepage

