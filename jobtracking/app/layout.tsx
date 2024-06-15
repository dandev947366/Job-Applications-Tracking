import type { Metadata } from "next";
import { manrope, molle } from "@/utils/fonts";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
      <body className={manrope.className}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Sidebar />
          <main className="bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
