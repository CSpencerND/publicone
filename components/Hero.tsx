import Image from "next/image"

import hero from "@/assets/PCC-Desktop_Banner.jpg"

export function Hero() {
    return (
        <section className="container hero relative aspect-video overflow-clip px-0 xl:rounded-b-xl">
            <Image
                fill
                src={hero}
                alt="public clothing company banner image"
                className="relative aspect-square object-cover sm:aspect-video"
            />
        </section>
    )
}
