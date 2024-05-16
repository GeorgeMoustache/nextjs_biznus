"use client"
import Link from "next/link"

const socialList = [
    { title: "twitter", link: "https://www.twitter.com" },
    { title: "facebook", link: "https://www.facebook.com" },
    { title: "instagram", link: "https://www.instagram.com" },
]

export default function Footer() {
    return (
        <footer id="footer">
            <div className="wrap">
                <Link
                    href="/"
                    className="logo"
                >
                    ACME
                </Link>
                <div className="social">
                    {socialList.map((item) => {
                        const { title, link } = item
                        return (
                            <a
                                key={`socialItem-${title}`}
                                className={title}
                                href={link}
                                target="_blank"
                            >
                                {title}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
