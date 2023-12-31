'use client'
import { Box } from "@mui/system"
import { Grid } from "@mui/material"
import { RecipientsProvider } from "../context/RecipientsContext"

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
    <RecipientsProvider>
      <div className="flex justify-center m-4">
          <div className="w-3/5 border-solid border-2 rounded border-sky-600 bg-sky-100">
          <div className='min-h-96'>

              {children}
          
          </div>
          </div>
      </div>
    </RecipientsProvider>
    )
  }