"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { multiStepFormSchema } from "@/modules/multi-step-form/schema";
import { useMultiStepFormStore } from "@/modules/multi-step-form/store";
import { MultiStepFormProps } from "@/modules/multi-step-form/hooks/use-multi-step";

const stepNameSchema = multiStepFormSchema.pick({
  firstName: true,
  lastName: true,
});

export const StepNameForm = ({ onNext }: MultiStepFormProps) => {
  const { formData, setData } = useMultiStepFormStore();

  const form = useForm<z.infer<typeof stepNameSchema>>({
    resolver: zodResolver(stepNameSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
    },
  });

  const onSubmit = (values: z.infer<typeof stepNameSchema>) => {
    setData(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};
