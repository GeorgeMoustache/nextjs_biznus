"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

// naviData
const naviList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/shop", title: "Shop" },
    { path: "/donate", title: "Donate" },
    { path: "/contact", title: "Contact" },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <header id="header">
            <div className="announcement-wrap">
                <Link
                    href="/announcement"
                    className="btn"
                >
                    Announcement
                </Link>
                <span>How we're responding to COVID-19</span>
            </div>
            <div className="navigation">
                <div className="container">
                    <Link
                        className="logo"
                        href="/"
                    >
                        ACME
                    </Link>
                    <div className="wrap">
                        <div className="links">
                            {naviList.map((item) => {
                                const { path, title } = item
                                return (
                                    <Link
                                        key={`naviItem-${title}`}
                                        className={pathname === path ? "active" : ""}
                                        href={path}
                                    >
                                        {title}
                                    </Link>
                                )
                            })}
                        </div>
                        <button className="cart">
                            <span className="amount">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
