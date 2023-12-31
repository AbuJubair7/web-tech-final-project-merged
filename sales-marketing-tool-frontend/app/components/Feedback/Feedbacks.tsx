import { useFeedback } from "@/app/context/FeedbackContext";
import { Box, Button, Grid, Paper, Skeleton, Stack, styled } from "@mui/material";
import FeedbackRatingReadOnly from "./FeedbackRatingReadOnly";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { Spinner } from "flowbite-react";
import MySpinner from "../utils/MySpinner";

const url = 'http://localhost:8888/feedbacks'
const fetcher = async() => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

const Feedbacks = () => {
    const router = useRouter()
    
    const { data, error } = useSWR('http://localhost:8888/feedbacks', fetcher)
    const { feedbacks, SetFeedback } = useFeedback();
    SetFeedback(data);

    // console.log(data);
    if(error) return 'An error has occured'
    if(!data)
    return (<MySpinner />)

    if(data.length === 0) return 'No feedbacks found'



  return (
    <div className="w-full">
        {data.map((feedback: any) => (
            <div key={feedback.id} onClick={()=>router.push(`/feedback/show/${feedback.id}`)} className="bg-green-200 rounded shadow-inner p-2 mb-2 hover:bg-green-300 hover:cursor-pointer hover:scale-105 transition duration-500">
                <div className="flex justify-between">
                    <div>
                    <p className="text-lg font-bold">{feedback.title}</p>
                    <div className="flex flex-start text-sm text-gray-500">
                        <p>{feedback.username}</p>
                        <p className="mx-2">|</p>
                        <p>{String(feedback.date)}</p>
                    </div>
                    
                    </div>
                    <FeedbackRatingReadOnly rating={feedback.rating} />
                </div>
                {feedback.description.length > 150 ? <p>{feedback.description.slice(0,150)}....Click to see more</p> : <p>{feedback.description}</p>}
            </div>
            
        ))}
    </div>
       
  )
}
export default Feedbacks