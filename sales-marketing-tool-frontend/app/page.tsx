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
            
            <div onClick={()=>router.push('/feedback')} className='grid content-center justify-center  bg-slate-700 hover:bg-slate-800 hover:cursor-pointer p-2 text-center rounded'>
              <p>Feedback</p>
              <p>management</p>
            </div>
            <div onClick={()=>router.push('/manage-tasks')} className='grid content-center justify-center bg-green-700 hover:bg-green-800 hover:cursor-pointer h-40 p-2 rounded'>
              <p >Manage</p>
              <p >Tasks</p>
            </div>
            <div onClick={()=>router.push('/recipients')} className='grid content-center justify-center bg-green-700 hover:bg-green-800 hover:cursor-pointer h-40 p-2 rounded'>
              <p >Recipients</p>
              <p >Management </p>
            </div>
            <div className='rounded grid content-center justify-center bg-slate-700 hover:bg-slate-800 hover:cursor-pointer p-2'>
              <p>Campaign</p>
              <p>Management</p>
            </div>
        </div>
      </div>
    </main>
  )
}
