// src/components/ui/checkbox.tsx
// This file defines a reusable Checkbox component.
// It uses @radix-ui/react-checkbox for accessibility and functionality.
// Styling is applied using Tailwind CSS.

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // Radix UI Checkbox primitive
import { Check } from "lucide-react"; // Icon for the checkmark

import { cn } from "@/lib/utils"; // Utility for combining class names

// Define props for the Checkbox component
export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

/**
 * Checkbox: A customizable checkbox input component.
 * It uses Radix UI's Checkbox primitive for robust accessibility features.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
      "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {/* Checkmark icon, visible when the checkbox is checked */}
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" /> {/* Lucide-react Check icon */}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName; // Inherit display name from Radix primitive

export { Checkbox };
