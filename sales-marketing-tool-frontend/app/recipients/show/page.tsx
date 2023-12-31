'use client'

import Title from "@/app/components/Recipients/Title"
import MySpinner from "@/app/components/utils/MySpinner";
import { useRecipients } from "@/app/context/RecipientsContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import useSWR, { mutate } from "swr";

const url = 'http://localhost:8888/recipients-management'
const fetcher = async() => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

const Show = () => {
    const router = useRouter()
    const {SetEditMode,SetCategory,SetEmail,SetName,SetId} = useRecipients();
    const { data, error } = useSWR('http://localhost:8888/recipients-management', fetcher)

    // console.log(data);
    if(error) return 'An error has occured'
    if(!data)
    return (<><Title title='All Recipients'/><MySpinner /></>)

    if(data.length === 0) return 'No feedbacks found'
  return (
    <>
        <Title title='All Recipients'/>

        <div className="p-4">
            {data.map((list: any) => (
                <div className="grid grid-cols-12 bg-sky-300 rounded mb-2" key={list.id}>
                    <div className="col-span-8 p-1">
                        <p className="uppercase font-bold">{list.name}</p>
                        <p className="">Category: {" "}{list.category}</p>
                    </div>
                    <div className="col-span-2 hover:cursor-pointer" onClick={()=>{
                        SetEditMode(true);
                        SetCategory(list.category);
                        SetEmail(list.email);
                        SetName(list.name);
                        SetId(list.id);
                        router.push('/recipients/create/email')
                    }}>
                        <p className="w-full h-full bg-sky-400 hover:bg-sky-500 grid content-center justify-center">
                            <FiEdit className='text-3xl'/>
                        </p>
                    </div>
                    <div className="col-span-2 hover:cursor-pointer" onClick={()=>{
                        fetch(`http://localhost:8888/recipients-management/${list.id}`, {
                            method: 'DELETE',
                        })
                        .then(response => response.json())
                        .then(data => {
                            mutate('http://localhost:8888/recipients-management')
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    }}>
                        <p className="w-full h-full bg-red-400 hover:bg-red-500 grid content-center justify-center">
                            <RiDeleteBinLine className='text-3xl'/>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}
export default Show