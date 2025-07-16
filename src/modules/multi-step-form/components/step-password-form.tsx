"use client";

import z from "zod";
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

const stepPasswordSchema = multiStepFormSchema.pick({
  password: true,
  repeatPassword: true,
});

export const StepPasswordForm = ({ onPrev, onNext }: MultiStepFormProps) => {
  const { formData, setData } = useMultiStepFormStore();

  const form = useForm<z.infer<typeof stepPasswordSchema>>({
    resolver: zodResolver(stepPasswordSchema),
    defaultValues: {
      password: formData.password || "",
      repeatPassword: formData.repeatPassword || "",
    },
  });

  const onSubmit = (values: z.infer<typeof stepPasswordSchema>) => {
    setData(values);
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your repeat password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onPrev}>
            Prev
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
};
