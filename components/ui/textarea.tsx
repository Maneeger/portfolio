// src/components/ui/textarea.tsx
// This file defines a reusable Textarea component.
// It provides a styled multi-line text input field.
// Styling is applied using Tailwind CSS.

import * as React from "react";

import { cn } from "@/lib/utils"; // Utility for combining class names

// Define props for the Textarea component
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Textarea: A customizable multi-line text input component.
 * It extends standard HTML textarea attributes.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm " +
          "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none " +
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea"; // Helps with debugging in React DevTools

export { Textarea };
