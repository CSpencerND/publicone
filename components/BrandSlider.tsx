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

import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"
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
                className="relative overflow-hidden rounded-lg"
            >
                <div className="not-prose flex h-80 scrollbar hover:scrollbar">
                    {brands.map((b, i) => (
                        <div key={i} className="carousel-item h-auto flex-[0_0_80%] last:flex-[0_0_100%] overflow-clip">
                            <Image
                                src={b.text}
                                alt={b.alt}
                                className="absolute z-30 w-1/4 p-4"
                            />
                            <Image
                                src={b.banner}
                                alt={b.alt}
                                className={cn("z-10 h-auto w-full object-cover", i === 0 ? "object-left-top" : "")}
                            />
                        </div>
                    ))}
                </div>
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
