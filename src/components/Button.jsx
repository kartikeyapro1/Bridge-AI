import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-brand-500 text-background hover:bg-brand-400 shadow-sm shimmer-effect glow-pulse",
            secondary: "bg-surface text-brand-500 hover:bg-surface/80 border border-brand-800",
            outline: "border border-brand-700 bg-transparent hover:bg-brand-900/30 text-brand-400",
            ghost: "hover:bg-brand-900/20 hover:text-brand-300 text-brand-400",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-11 px-6 py-2 text-sm",
            lg: "h-14 px-8 text-base",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
