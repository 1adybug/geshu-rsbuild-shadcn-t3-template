import type { FC, ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import { CssHasPolyfill } from "@/components/CssHasPolyfill"
import { Toaster } from "@/components/Toaster"

import { queryClient } from "@/constants"

import { TooltipProvider } from "./ui/tooltip"

export interface RegistryProps {
    children?: ReactNode
}

export const Registry: FC<RegistryProps> = ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <CssHasPolyfill />
        <QueryClientProvider client={queryClient}>
            <TooltipProvider delayDuration={0}>
                {children}
                <Toaster />
            </TooltipProvider>
        </QueryClientProvider>
    </ThemeProvider>
)
