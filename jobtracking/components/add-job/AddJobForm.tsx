"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  CreateAndEditJobType
} from "@/utils/types";
import { CustomFormField, CustomFormSelect } from "../FormComponents";

const AddJobForm = () => {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime
    }
  });
  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-muted p-8 rounded"
        >
          <h2 className="capitalize font-semibold text-4xl mb-6">Add Job</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start"></div>
          {/* position */}
          <CustomFormField name='position' control={form.control} />
          {/* company */}
          <CustomFormField name='company' control={form.control} />
          {/* location */}
          <CustomFormField name='location' control={form.control} />
          {/* status */}
          <CustomFormSelect name='status' control={form.control} labelText="job status" items={Object.values(JobStatus)}/>
          {/* mode */}
          <CustomFormSelect name='mode' control={form.control} labelText="job mode" items={Object.values(JobMode)}/>
        
        <Button type='submit' className='self-end capitalize mt-5'>
            Add Job
        </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddJobForm;
