'use client'

import { Button, Textarea } from 'flowbite-react';
import Title from '../../../components/Recipients/Title';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRecipients } from '@/app/context/RecipientsContext';

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function verifyEmailList(emailList: string): boolean {
  // Split the comma-separated email list into an array of emails
  const emails = emailList.split(',');

  // Check if all emails are in the correct format
  const allEmailsValid = emails.every((email) => validateEmail(email.trim()));

  return allEmailsValid;
}

const Email = () => {
    const router = useRouter()
    let {email, SetEmail} = useRecipients();

    const handleEmail = (e:any) => {
        if(!email || !verifyEmailList(email)) {
          alert('Please enter a list of valid email address');
          return
        }
        router.push('/recipients/create/category')
    }
  return (
    <>
      <Title title="Add Recipients Mail"/>

      <div className="grid grid-cols-2 m-10 gap-3">
          <Textarea className='col-span-2 bg-green-200 border-2' id="comment" placeholder="Drop recipients email list here. **Must be comma separated values.." 
          required 
          rows={8} 
          value={email && email || ''}
          onChange={(e) => SetEmail(e.target.value)}
          />
          <Button onClick={()=>router.back()}>Back</Button>
          <Button  color="success" onClick={handleEmail}>Next</Button>
        
      </div>
    
        

    </>
  )
}
export default Email