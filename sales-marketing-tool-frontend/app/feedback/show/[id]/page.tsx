'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { Dropdown } from "flowbite-react";
import MyDropdown from '@/app/components/Feedback/MyDropdown';
import Feedbacks from '@/app/components/Feedback/Feedbacks';
import { useFeedback } from '@/app/context/FeedbackContext';
import FeedbackRatingReadOnly from '@/app/components/Feedback/FeedbackRatingReadOnly';
import { useRouter } from 'next/navigation';
import useSWR from "swr";
import { Spinner } from "flowbite-react";


const ShowFeedback = ({ params }: { params: { id: number } }) => {
    const router = useRouter()
    const { feedbacks, SetFeedback } = useFeedback();
    const targetFeedback = feedbacks.find(feedback => feedback.id === +params.id);

  return (
    
        <Grid container spacing={2} className=''    >
            <Grid xs={12} className='bg-green-300'>
                <h1 className="font-bold text-4xl text-center">View Feedback</h1>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="flex-start">
                <a href="#" className="font-bold text-green-600 hover:underline" onClick={()=>router.back()}>Back</a>
                </Box>
            </Grid>

            <div className="w-full">
            {targetFeedback && (
                <div className="bg-green-200 rounded shadow-inner p-2 mb-2 hover:bg-green-300 hover:cursor-pointer">
                    <div className="flex justify-between">
                    <div>
                    <p className="text-lg font-bold">{targetFeedback.title}</p>
                    <div className="flex flex-start text-sm text-gray-500">
                        <p>{targetFeedback.username}</p>
                        <p className="mx-2">|</p>
                        <p>{String(targetFeedback.date)}</p>
                    </div>
                    
                    </div>
                    <FeedbackRatingReadOnly rating={targetFeedback.rating} />
                </div>
                <p>{targetFeedback.description}</p>
                </div>
                
            )}
    </div>
           
        </Grid>  
  )
}
export default ShowFeedback