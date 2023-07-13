"use client"

import atmBanner from "@/assets/atm/ATM_BrandImage_606x650_3.jpg"
import atmText from "@/assets/atm/atm.png"

import dlBanner from "@/assets/dl/DL_BrandImageDesktop_1.jpg"
import dlText from "@/assets/dl/dl.png"

import hcBanner from "@/assets/hc/Hypercolor_2000_650.jpg"
import hcText from "@/assets/hc/hc.png"

import pbBanner from "@/assets/pb/Private_label_Carousel_1200x800.jpg"
import pbText from "@/assets/pb/pb.png"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

import { cn } from "@/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"

export function BrandSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="container prose max-w-none">
            <h2 className="text-foreground">Our Brands</h2>
            <div
                ref={emblaRef}
                className="relative overflow-hidden rounded-lg shadow-md shadow-black/40 dark:border dark:border-white/60 dark:shadow-none lg:hidden"
            >
                <menu className="not-prose flex h-80 sm:h-96 md:h-[28rem] scrollbar hover:scrollbar">
                    {brands.map((b, i) => (
                        <li
                            key={i}
                            className="brands__item carousel-item relative h-auto flex-[0_0_80%] cursor-pointer overflow-clip last:flex-[0_0_100%]"
                        >
                            <Image
                                src={b.text}
                                alt={b.alt}
                                className="absolute z-30 w-1/4 p-4"
                            />
                            <Image
                                src={b.banner}
                                alt={b.alt}
                                width={450}
                                height={300}
                                className={cn(
                                    "z-10 h-full w-full object-cover",
                                    i === 0 ? "object-left-top" : "",
                                    i === 1 ? "object-[45%_center]" : ""
                                )}
                            />
                        </li>
                    ))}
                </menu>
                <div className="absolute left-5 right-5 top-1/2 z-10 flex -translate-y-1/2 transform justify-between">
                    <Button
                        size="icon"
                        className="rounded-full bg-foreground/60 dark:bg-background/60 dark:text-foreground"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft />
                        <span className="sr-only">Scroll Previous</span>
                    </Button>
                    <Button
                        size="icon"
                        className="rounded-full bg-foreground/60 dark:bg-background/60 dark:text-foreground"
                        onClick={scrollNext}
                    >
                        <ChevronRight />
                        <span className="sr-only">Scroll Next</span>
                    </Button>
                </div>
            </div>
            <menu className="brands__grid grid gap-4 max-lg:hidden">
                {brands.map((b, i) => (
                    <li
                        key={i}
                        className={cn(
                            "brands__item relative m-0 cursor-pointer overflow-clip rounded-lg shadow-md shadow-black/40 dark:shadow-none",
                            i === 0 ? "atm" : "",
                            i === 1 ? "dc" : "",
                            i === 2 ? "hc" : "",
                            i === 3 ? "pb " : ""
                        )}
                    >
                        <Image
                            src={b.text}
                            alt={b.alt}
                            className="absolute z-30 w-1/4 px-4"
                        />
                        <Image
                            src={b.banner}
                            alt={b.alt}
                            width={450}
                            height={300}
                            className={cn(
                                "z-10 m-0 h-full w-full rounded-lg object-cover dark:border dark:border-white/60",
                                i === 0 ? "object-left-top" : "",
                                i === 1 ? "object-[45%_center]" : "",
                                i === 3 ? "max-h-96 w-full object-top" : ""
                            )}
                        />
                    </li>
                ))}
            </menu>
        </section>
    )
}

const brands = [
    {
        banner: atmBanner,
        text: atmText,
        alt: "Anthony Thomas Melillo",
    },
    {
        banner: dlBanner,
        text: dlText,
        alt: "Derek Lam 10 Crosby",
    },
    {
        banner: hcBanner,
        text: hcText,
        alt: "Hyper Color",
    },
    {
        banner: pbBanner,
        text: pbText,
        alt: "Private Brands",
    },
]
