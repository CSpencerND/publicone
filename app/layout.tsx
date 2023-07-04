import { Footer } from "@/components/Footer"
import { Separator } from "@/components/Separator"
import { SiteHeader } from "@/components/SiteHeader"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { ThemeProvider } from "@/components/theme/ThemeProvider"

import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Public Clothing Company",
    description: "",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen antialiased", inter.className)}>
                <ThemeProvider attribute="class">
                    <SiteHeader />
                    <main className="space-y-8">{children}</main>
                    <Separator />
                    <Footer />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    )
}
