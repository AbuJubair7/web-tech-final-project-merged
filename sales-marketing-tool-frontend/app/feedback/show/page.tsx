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
import { Suspense, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr'
import { Skeleton } from '@mui/material';

const url = "http://localhost:8888/feedbacks"
const fetcher = (url: string) => axios.get(url).then(res => res.data)


const ShowFeedback = () => {
    const { feedbacks, SetFeedback } = useFeedback();
    const baseURL = "http://localhost:8888/feedbacks";
    

    // const { data } = useSWR('feasdfasdf',fetcher)
    // console.log(data);
    
    // useEffect(() => {
    //     const renderFeedbacks = async () => {
    //         axios.get(baseURL).then((response) => {
    //             SetFeedback(response.data)
    //         })
    //     }
    //     renderFeedbacks();
    // },[]);

  return (
        <Grid container spacing={2} className=''    >
            <Grid xs={12} className='bg-green-300'>
                <h1 className="font-bold text-4xl text-center">View All Feedback</h1>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="flex-end">
                    
                <MyDropdown />

                </Box>
            </Grid>
           
            
            <Feedbacks />
        </Grid>
        
  )
}
export default ShowFeedback