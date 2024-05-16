import Link from "next/link"

export default function Statement() {
    return (
        <div id="statement">
            <div className="wrap">
                <div className="title">How we're keeping you safe during COVID-19</div>
                <div className="content">
                    As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team
                    members.
                </div>
                <Link
                    className="btn"
                    href="/"
                >
                    Read Our Statement
                </Link>
            </div>
        </div>
    )
}
