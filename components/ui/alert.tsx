// src/components/ui/alert.tsx
// This file defines a reusable Alert component.
// It's designed to display important messages to the user.
// It uses 'class-variance-authority' for defining variants and
// assumes a 'cn' utility for combining Tailwind CSS classes.

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"; // Utility for combining class names

// Define alert variants using class-variance-authority (cva)
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Define props for the Alert component
export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

/**
 * Alert: A customizable component to display important messages.
 * It supports different variants for visual emphasis.
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert" // ARIA role for accessibility
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  )
);
Alert.displayName = "Alert"; // Helps with debugging in React DevTools

/**
 * AlertTitle: A heading for the Alert component.
 */
const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

/**
 * AlertDescription: A descriptive paragraph for the Alert component.
 */
const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

// Export components for use in other files
export { Alert, AlertTitle, AlertDescription };
