"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const inputVariants = cva(
  "flex w-full rounded-xl border border-border bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border hover:border-border/80 focus:border-primary",
        glass:
          "bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60",
        outline: "border-2 border-border bg-transparent",
        filled: "bg-muted border-transparent hover:bg-muted/80",
      },
      size: {
        default: "h-12 px-4 py-3",
        sm: "h-10 px-3 py-2 text-sm",
        lg: "h-14 px-6 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, error, type, ...props }, ref) => {
    return (
      <motion.input
        type={type}
        className={cn(
          inputVariants({ variant, size }),
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        {...(props as any)}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
