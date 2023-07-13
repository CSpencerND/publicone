import Image from "next/image"

import hero from "@/assets/PCC-Desktop_Banner.jpg"

export function Hero() {
    return (
        <section className="container lg:opacity-90 hero relative aspect-video overflow-clip px-0 xl:rounded-b-xl mb-12">
            {/* <div aria-hidden="true" className="hero__overlay" /> */}
            <Image
                fill
                src={hero}
                alt="public clothing company banner image"
                className="relative aspect-square object-cover sm:aspect-video"
            />
            <div className="container prose absolute bottom-0 z-50 mt-8 max-w-none py-8 max-lg:hidden backdrop-blur-lg backdrop-saturate-150 bg-gradient-to-t from-background via-background/60 to-transparent">
                <figure>
                    <h2 className="text-foreground">Our Vision</h2>
                    <blockquote className="max-w-prose border-border/60">
                        <p className="text-foreground/90">
                            We understand the drive and passion that goes into creating a brand. As a business, we
                            provide all of our brands with a space to focus on designing and developing their identity.
                            The key is to maintain and protect the authenticity of each brand that sits on our platform
                            allowing them room to evolve and expand.
                        </p>
                        <figcaption className="text-foreground/90">
                            <b>- Dan Shamdasani, CEO</b>
                        </figcaption>
                    </blockquote>
                </figure>
            </div>
        </section>
    )
}
