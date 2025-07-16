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
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { multiStepFormSchema } from "@/modules/multi-step-form/schema";
import { useMultiStepFormStore } from "@/modules/multi-step-form/store";
import { MultiStepFormProps } from "@/modules/multi-step-form/hooks/use-multi-step";

const stepUsernameSchema = multiStepFormSchema.pick({
  username: true,
  terms: true,
});

export const StepUsernameForm = ({ onPrev }: MultiStepFormProps) => {
  const { formData, setData, clear } = useMultiStepFormStore();

  const form = useForm<z.infer<typeof stepUsernameSchema>>({
    resolver: zodResolver(stepUsernameSchema),
    defaultValues: {
      username: formData.username || "",
      terms: formData.terms || false,
    },
  });

  const onSubmit = (values: z.infer<typeof stepUsernameSchema>) => {
    setData(values);
    clear();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>我同意服务条款</FormLabel>
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
