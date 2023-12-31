'use client'

import Image from 'next/image'
import Button from '@mui/material/Button';
import { Dropdown } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div className='bg-purple-300 w-3/5 h-94 rounded mx-auto mt-10 border-2 border-purple-400 font-bold text-center text-xl uppercase text-white'>
        <div className='grid grid-cols-2 p-4 gap-3 w-full'>
            
            <div onClick={()=>router.push('/feedback/add')} className='grid content-center justify-center  bg-slate-700 hover:bg-slate-800 hover:cursor-pointer p-2 text-center rounded'>
              <p>Add</p>
              <p>Feedback</p>
            </div>
            <div className='grid content-center justify-center bg-green-700 hover:bg-green-800 hover:cursor-pointer h-40 p-2 rounded'>
              
            </div>
            <div className='grid content-center justify-center bg-green-700 hover:bg-green-800 hover:cursor-pointer h-40 p-2 rounded'>
              
            </div>
            <div onClick={()=>router.push('/feedback/show')} className='rounded grid content-center justify-center bg-slate-700 hover:bg-slate-800 hover:cursor-pointer p-2'>
              <p>Show</p>
              <p>Feedback</p>
            </div>
        </div>
      </div>
    </main>
  )
}
