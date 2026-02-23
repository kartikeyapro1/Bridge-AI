import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        const variants = {
            primary: "bg-brand-500 text-white hover:bg-blue-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30",
            secondary: "bg-white text-brand-100 border-2 border-brand-600 hover:bg-gray-50 hover:border-brand-500",
            outline: "border-2 border-accent-green text-brand-100 bg-transparent hover:bg-accent-green/5",
            ghost: "hover:bg-gray-100 text-brand-300 hover:text-brand-100",
        };

        const sizes = {
            sm: "h-9 px-5 text-sm",
            md: "h-11 px-7 text-sm",
            lg: "h-13 px-9 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
