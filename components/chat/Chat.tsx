'use client'
import axios from 'axios'
import React, { useState } from 'react'
import {FiSend} from 'react-icons/fi'
type Props = {}
import { usePathname } from 'next/navigation';

const Chat = (props: Props) => {
  
  const pathname = usePathname()
  const [question,setQuestion] = useState('')
  const [showQuestion,setShowQuestion] = useState('')
  const [answer,setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async()=>{
      setShowQuestion(question);
      setQuestion("");
      setIsLoading(true);

      try {
        await axios.post(`api/chats${pathname}`, { question: question, id: pathname });
        const res = (await axios.get(`api/chats${pathname}`)).data;
        setAnswer(res);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); 
      }
  }



  return (

    <div className='flex flex-col h-screen p-2'>
        <div className='flex-1'> 
          <div className='text-xl font-semibold'>{showQuestion}</div>
            {
              isLoading?<div className='text-3xl'>
                GPT正在思考。。。
              </div>:
              <div>{answer}</div>
            }
          </div>

        <div className='relative'>
            <textarea value={question} onChange={(e)=>setQuestion(e.target.value)}
                      className='border-[1px] border-black rounded-lg p-2 w-full' rows={3} />
            <button onClick={handleClick}
                    className='absolute right-1 bottom-3'>
                <FiSend size={20} className=' hover:text-green-500'/>
            </button>
        </div>
        
    </div>
  )
}

export default Chat