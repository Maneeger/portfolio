// src/components/ui/label.tsx
// This file defines a reusable Label component.
// It uses @radix-ui/react-label for accessibility features.
// Styling is applied using Tailwind CSS.

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label"; // Radix UI Label primitive
import { cva, type VariantProps } from "class-variance-authority"; // For defining variants

import { cn } from "@/lib/utils"; // Utility for combining class names

// Define label variants using class-variance-authority (cva)
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Define props for the Label component
export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

/**
 * Label: A customizable label component for form elements.
 * It uses Radix UI's Label primitive for improved accessibility.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName; // Inherit display name from Radix primitive

export { Label };
