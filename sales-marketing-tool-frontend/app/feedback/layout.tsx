'use client'
import { FeedbackProvider } from "../context/FeedbackContext"

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <FeedbackProvider> 
            {children}
        </FeedbackProvider>
      </section>
    )
  }