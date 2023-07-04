import { BrandSlider } from "@/components/BrandSlider"

export default function Home() {
    return (
        <>
            <section className="container prose max-w-none mt-8">
                <figure>
                    <h2 className="text-foreground">Our Vision</h2>
                    <blockquote className="max-w-prose border-border/60">
                        <p className="text-muted-foreground">
                            We understand the drive and passion that goes into creating a brand. As a business, we
                            provide all of our brands with a space to focus on designing and developing their identity.
                            The key is to maintain and protect the authenticity of each brand that sits on our platform
                            allowing them room to evolve and expand.
                        </p>
                        <figcaption className="text-muted-foreground">
                            <b>- Dan Shamdasani, CEO</b>
                        </figcaption>
                    </blockquote>
                </figure>
            </section>
            <BrandSlider />
        </>
    )
}
