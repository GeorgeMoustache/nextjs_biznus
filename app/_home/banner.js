import Link from "next/link"

export default function Banner() {
    return (
        <div id="banner">
            <div className="outer">
                <div className="inner">
                    <div className="title">Serving you since 1989.</div>
                    <div className="content">
                        Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                    </div>
                    <Link
                        className="goshop"
                        href={"/shop"}
                    >
                        Shop Merch
                    </Link>
                </div>
            </div>
        </div>
    )
}
