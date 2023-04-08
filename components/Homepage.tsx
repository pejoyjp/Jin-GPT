'use client'
import fetcher from '@/libs/fetcher';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR from 'swr'
import Image from 'next/image';

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

        <div className='flex flex-col justify-center items-center'>
            <p className='text-2xl'>功能箱(请捐助我)</p>
            <Image src='/wx.jpeg' alt='' width={200} height={200}/>
        </div>

        <div className='h-10 flex items-center justify-center w-10/12'>
            国内访问GPT很慢，请耐心等待问题的答案 
        </div>
        <div className='h-5 flex items-center justify-center w-10/12'>
           _Jin
        </div>

        <p className='text-xl'>你可以问？😅</p>
        <div className='flex flex-col items-center gap-5 w-full'>
            <div className='h-10 bg-slate-300 flex items-center  justify-center px-2 hover:bg-slate-400 rounded-lg w-10/12'>
            请你用js写一个get请求?
            </div>
            <div className='h-10 bg-slate-300 flex items-center  justify-center px-2 hover:bg-slate-400 rounded-lg w-10/12'>
            玄武门之变是怎么回事?
            </div>
            <div className='h-10 bg-slate-300 flex items-center  justify-center px-2 hover:bg-slate-400 rounded-lg w-10/12'>
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

