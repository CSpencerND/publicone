"use client"

import PccLogo from "@/assets/PccLogo"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { ThemeToggler } from "./theme/ThemeToggler"

import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"

const links = [
    {
        text: "About PCC",
        href: "/about",
    },
    {
        text: "Our Brands",
        href: "/brands",
    },
    {
        text: "Contact",
        href: "/contact",
    },
]

export function SiteHeader() {
    const { ref, inView } = useInView({ rootMargin: "74px" })

    return (
        <>
            <header className={cn("fixed top-0 z-40 w-full")}>
                <div
                    className={cn(
                        "container flex h-[74px] items-center justify-between space-x-4 text-background transition duration-300 dark:text-foreground",
                        !inView
                            ? "border-b bg-background/60 text-foreground backdrop-blur-lg backdrop-saturate-150"
                            : ""
                    )}
                >
                    <div>
                        <Link
                            href="/"
                            className="-mb-2 flex h-auto w-16"
                        >
                            <PccLogo className="h-auto fill-current" />
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <ThemeToggler />
                        <div className={cn("space-y-4 text-lg", inView ? "hidden" : "")}>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="-mr-2"
                                    >
                                        <MenuIcon size={32} />
                                        <span className="sr-only">Open Menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="grid border-l-border/40 bg-background/60">
                                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                    <menu className={cn("menu -mt-[50%] text-lg")}>
                                        {links.map((l, i) => (
                                            <li key={i}>
                                                <Link
                                                    className="py-3.5"
                                                    href={l.href}
                                                >
                                                    {l.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </menu>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
                <nav
                    className={cn(
                        "menu space-y-4 pl-8 text-lg text-background transition duration-300 dark:text-foreground",
                        !inView ? "hidden" : ""
                    )}
                >
                    {links.map((l, i) => (
                        <Link key={i} href={l.href}>{l.text}</Link>
                    ))}
                </nav>
            </header>
            <div
                aria-hidden="true"
                ref={ref}
            />
        </>
    )
}
