'use client'

import { Button, Textarea } from 'flowbite-react';
import Title from '../../../components/Recipients/Title';
import { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import page from '../category/page';
import { TiTick } from "react-icons/ti";
import { useRecipients } from '@/app/context/RecipientsContext';
import axios from 'axios';
import Link from 'next/link';





const Save = () => {
    const effectRan = useRef<boolean>(false);

    const {email, category, name, SetEmail, SetCategory, SetName, editMode,SetEditMode, id, SetId} = useRecipients();
    
    console.log(email, category, name)
    
    const baseURL = "http://localhost:8888/recipients-management";
    useEffect(() => {
        const uploadData = async () => {

            if(!editMode) {
                await axios
                .post(baseURL, {
                    email: email,
                    category: category,
                    name: name,
                })
                .then((response) => {
                    SetEmail(null);
                    SetCategory(null);
                    SetName(null);
                    SetEditMode(false);
                    SetId(null);
                });
            }else
            {
                await axios
                .put(`${baseURL}/${id}`, {
                    email: email,
                    category: category,
                    name: name,
                })
                .then((response) => {
                    SetEmail(null);
                    SetCategory(null);
                    SetName(null);
                    SetEditMode(false);
                    SetId(null);
                });
            }
        }

        if (!effectRan.current) {
            console.log("effect applied - only on the FIRST mount");
            if(email && category && name) {
                uploadData()
            }
        }

        effectRan.current = true;
    },[]);

    
    


  return (
    <>
      <Title title="You're at the edge"/>
      <div className="h-96 grid content-center justify-center">
            <p className='mx-auto'><TiTick className='text-green-600 text-7xl' /></p>
            <p className='text-center'>Ricipeints have been successfully saved/updated.</p>
            <p className='text-center'> <Link href='/recipients/show' className='underline font-semibold hover:text-green-500'>Click here</Link> to see list of recipients.</p>
        
      </div>

    </>
  )
}
export default Save