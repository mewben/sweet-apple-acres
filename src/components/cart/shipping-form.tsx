"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { useCart } from "./cart-store";

const COUNTRIES: Record<string, string> = {
  us: "United States",
  ph: "Philippines",
};

const formSchema = z.object({
  country: z.string().min(2, {
    message: "Please enter a value",
  }),
  firstName: z.string().min(2, {
    message: "Please enter a value",
  }),
  lastName: z.string().min(2, {
    message: "Please enter a value",
  }),
  address: z.string().min(2, {
    message: "Please enter a value",
  }),
  city: z.string().min(2, {
    message: "Please enter a value",
  }),
  state: z.string().min(2, {
    message: "Please enter a value",
  }),
  zip: z.string().min(2, {
    message: "Please enter a value",
  }),
});

type Props = {
  disabled: boolean;
};

const ShippingForm = ({ disabled }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "ph",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country/Region</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Country/Region" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.keys(COUNTRIES).map((countryCode) => (
                    <SelectItem value={countryCode} key={countryCode}>
                      {COUNTRIES[countryCode]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apartment, Street, etc.</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <hr />
        <Button type="submit" className="w-full" size="lg" disabled={disabled}>
          Confirm Order
        </Button>
        <Button variant="link" asChild>
          <Link href="/">&larr; or Continue Shopping</Link>
        </Button>
      </form>
    </Form>
  );
};

export const ShippingFormWrapper = () => {
  const { items } = useCart();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Shipping information</h3>
      <ShippingForm disabled={Object.keys(items).length === 0} />
    </div>
  );
};
