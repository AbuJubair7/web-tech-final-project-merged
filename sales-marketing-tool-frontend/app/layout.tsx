"use client";
import type { Metadata } from "next";
import { Poppins, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"; // or `v14-appRouter` if you are using Next.js v14
import { AuthProvider } from "./context/AuthContext";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${roboto_condensed.variable}`}>
          <AppRouterCacheProvider><Suspense fallback={<Loading />}> {children}</Suspense></AppRouterCacheProvider>
        </body>
      </html>
   
  );
}
