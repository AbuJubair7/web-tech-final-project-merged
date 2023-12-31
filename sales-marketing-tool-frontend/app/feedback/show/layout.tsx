'use client'
import { Box } from "@mui/system"
import { Grid } from "@mui/material"

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex justify-center m-2">
        <Box
        component="form"
        sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
        className="border-2 rounded border-green-300 mt-3 bg-green-100"
        >
            {children}
        
        </Box>
    </div>
    )
  }