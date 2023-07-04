import { Map, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="container footer justify-between space-y-6 px-8 pb-12 sm:grid-flow-col [&>*>*]:font-semibold [&>*>*]:text-muted-foreground [&>*]:space-y-2 [&>*]:not-italic">
            <address className="prose text-primary [&>*]:no-underline">
                <a
                    className="flex"
                    href="https://goo.gl/maps/rejzK91cScLMKuPa8"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <Map className="mr-2" />
                    151 W. 26th St.
                    <br />
                    7th Floor
                    <br />
                    New York, NY 10001
                </a>
            </address>
            <address className="prose sm:!mt-0 [&>*]:no-underline">
                <a
                    className="flex"
                    href="mailto:info@publicclothing.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <Mail className="mr-2" />
                    info@publicclothing.com
                </a>
                <br />
                <a
                    className="flex"
                    href="tel:+12127688440"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <Phone className="mr-2" />
                    (212) 768-8440
                </a>
            </address>
        </footer>
    )
}
