// src/components/ui/card.tsx
// This file defines the Card component and its sub-components.
// It's designed to be a flexible container for content, often used
// to group related information or actions.
// It uses @radix-ui/react-slot for composability and assumes
// a 'cn' utility for combining Tailwind CSS classes.

import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Used for flexible component rendering

// Assuming you have a utility function for combining class names,
// typically from 'clsx' and 'tailwind-merge'.
// If you don't have this, you'll need to create it or adjust the code.
import { cn } from "@/lib/utils"; // Adjust this path if your cn utility is elsewhere

// --- Interfaces for Card Components ---

// Base props for the Card container
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any custom props specific to your Card component here if needed
}

// Props for CardHeader
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

// Props for CardTitle (renders as h3 by default)
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

// Props for CardDescription (renders as p by default)
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

// Props for CardContent
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

// Props for CardFooter
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// --- Card Component Definitions ---

/**
 * Card: A flexible container for grouping related content.
 * It provides a consistent visual boundary and can contain various sub-components.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm", // Default Tailwind styles for a card
        className // Allows overriding or extending default styles with props
      )}
      {...props}
    />
  )
);
Card.displayName = "Card"; // Helps with debugging in React DevTools

/**
 * CardHeader: The top section of a Card, typically for titles and descriptions.
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)} // Default Tailwind styles for header padding and spacing
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

/**
 * CardTitle: A heading component for the CardHeader.
 * Renders as an h3 element by default.
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight", // Default Tailwind styles for title typography
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

/**
 * CardDescription: A descriptive paragraph for the CardHeader.
 * Renders as a p element by default.
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)} // Default Tailwind styles for description typography
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

/**
 * CardContent: The main content area of the Card.
 * Typically contains the primary information or UI elements.
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Default Tailwind styles for content padding
  )
);
CardContent.displayName = "CardContent";

/**
 * CardFooter: The bottom section of a Card, often used for actions or metadata.
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)} // Default Tailwind styles for footer padding and alignment
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

// --- Export Components ---
// These exports make the components available for import in other files.
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
