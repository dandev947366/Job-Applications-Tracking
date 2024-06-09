import type { Metadata } from "next";
import { manrope, molle } from "@/utils/fonts";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Job Tracking",
  description: "Job applications tracking system for job seekers"
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
  
    <ClerkProvider>
      <html lang="en">
      <h1 className={molle.className}>Job Tracking</h1>
        <body className={manrope.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
