'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import FeedbackRating from '@/app/components/Feedback/FeedbackRating';
import { useFeedback } from '@/app/context/FeedbackContext';
import { useState } from 'react';
import axios from 'axios';
import { Toast } from 'flowbite-react';
import { HiCheck } from 'react-icons/hi';





export default function FeedbackForm() {
    let { feedbacks, SetFeedback, feedbackRating, SetFeedbackRating} = useFeedback();
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [feedbackSent, setFeedbackSent] = useState(false);
    let today = new Date().toLocaleDateString('en-GB');
    
    const baseURL = "http://localhost:8888/feedbacks";
    let saveFeedback = () => {
        if(feedbackRating === 0 || title === "" || description === ""){
            alert("Please fill all the fields")
            return
        }
        axios
        .post(baseURL, {
            username: "shamimahmed",
            title: title,
            description: description,
            rating: feedbackRating,
            date: today
        })
        .then((response) => {
            setTitle("");
            setDescription("");
            SetFeedbackRating(0);
            setFeedbackSent(true);
        });
    } 

    
    return (
    <div className="flex flex-col justify-between h-screen pb-4">
        <div className='flex justify-center'>
        <Box
        component="form"
        sx={{
            "& > :not(style)": { m: 1, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
        className="border-2 rounded border-green-300 mt-3 bg-green-100"
        >
        <Grid container spacing={2} className=''    >
            <Grid xs={12} className='bg-green-300'>
                <h1 className="font-bold text-4xl text-center">Customer Feedback Form</h1>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="center">
                    <FeedbackRating />
                </Box>
            </Grid>
            <Grid xs={12}>
                <input type="text" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Feedback Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </Grid>
            <Grid xs={12}>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-green-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-green-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}></textarea>
            </Grid>

            <Grid xs={12}>
                <Box display="flex" justifyContent="center">
                    <Button variant="contained" color='success' onClick={()=>saveFeedback()} >Submit</Button>
                </Box>
            </Grid>
            

        </Grid>
        </Box>
        </div>

        {feedbackSent && (<Toast className='bg-green-300'>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
            <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-semibold text-black">Feedback is sent successfully!</div>
        <Toast.Toggle className='hover:text-red-600 text-gray-800' onClick={()=>setFeedbackSent(false)}/>
        </Toast>)}
        

  </div>
  

   
  )
}
