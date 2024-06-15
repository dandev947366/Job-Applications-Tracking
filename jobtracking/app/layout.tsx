import type { Metadata } from "next";
import { manrope, molle } from "@/utils/fonts";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
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
      <div className="grid grid-cols-[300px,1fr]">
  <Sidebar />
  <main className="bg-gray-100 overflow-y-hidden">
  
            {children}
        
       </main>
</div>
      </body>
    </html>
    </ClerkProvider>
  );
}
