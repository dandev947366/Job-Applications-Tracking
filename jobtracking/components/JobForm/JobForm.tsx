"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import JobItem from "./JobItem"; // Adjust the import path as needed
import { Clock, Eye, Star } from "lucide-react";

const formSchema = z.object({
  companyName: z.string().min(3),
  jobTitle: z.string().min(3),
  emailAddress: z.string().email(),
  website: z.string().min(3),
});

export default function Home() {
  const [formData, setFormData] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      emailAddress: "",
      website: "",
    },
  });

  const handleSubmit = (values) => {
    setFormData(values);
    console.log({ values });
  };

  const companyInfo = [
    { name: "Company Name", icon: <Clock size={16} /> },
    { name: "Email Address", icon: <Eye size={16} /> },
    { name: "Website", icon: <Star size={16} /> },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Company Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Job Title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Website" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email Address" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>

      {formData && (
        <JobItem
          jobTitle={formData.jobTitle}
          companyName={formData.companyName}
          emailAddress={formData.emailAddress}
          website={formData.website}
          companyInfo={companyInfo}
        />
      )}
    </main>
  );
}
