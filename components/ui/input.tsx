// src/components/ui/input.tsx
// This file defines a reusable Input component.
// It provides a styled input field with focus and disabled states.
// Styling is applied using Tailwind CSS.

import * as React from "react";

import { cn } from "@/lib/utils"; // Utility for combining class names

// Define props for the Input component
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input: A customizable input field component.
 * It extends standard HTML input attributes.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm " +
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium " +
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 " +
          "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input"; // Helps with debugging in React DevTools

export { Input };
