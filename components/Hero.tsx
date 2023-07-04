import Image from "next/image"

import hero from "@/assets/PCC-Desktop_Banner.jpg"

export function Hero() {
    return (
        <section className="hero">
            <Image
                src={hero}
                alt="public clothing company banner image"
                className="aspect-square object-cover sm:aspect-video"
            />
        </section>
    )
}
