import type { FC, ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

import { CssHasPolyfill } from "@/components/CssHasPolyfill"

import { Toaster } from "@/components/ui/sonner"

import { queryClient } from "@/constants"

export interface RegistryProps {
    children?: ReactNode
}

export const Registry: FC<RegistryProps> = ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <CssHasPolyfill />
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-center" />
        </QueryClientProvider>
    </ThemeProvider>
)
