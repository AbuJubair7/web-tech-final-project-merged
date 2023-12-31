'use client'

import { useRouter } from 'next/navigation'

import { Button } from 'flowbite-react';

import { Grid } from "@mui/material"
import { HiOutlineArrowRight } from 'react-icons/hi';
import Title from '../../components/Recipients/Title';


const CreateRecipient = () => {
  const router = useRouter()
  return (
      <>
        <Title title="Create Recipient List"/>
        
        <div className="h-96 grid content-center justify-center">

          <Button onClick={()=>router.push('/recipients/create/email')}>
            <p className='text-l'>Start Creating</p>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>

        </div>
      </>
    
  )
}
export default CreateRecipient