const featureList = [
    {
        title: "shop products",
        content:
            "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
    },
    {
        title: "donate",
        content:
            "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
    },
    {
        title: "buy gift cards",
        content:
            "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.",
    },
]

export default function Support() {
    return (
        <div id="support">
            <div className="wrap">
                <div className="intro">
                    <div className="title">
                        <span>WAYS TO SUPPORT</span>
                        <h2>Support Acme Outdoors.</h2>
                    </div>
                    <div className="content">
                        COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more
                        than ever. Below, we’ve listed the best ways to help us through this season.
                    </div>
                </div>
                <div className="feature">
                    {featureList.map((item, idx) => {
                        const { title, content } = item
                        return (
                            <dl key={`featureItem-${idx}`}>
                                <dt>
                                    <span className="opt">{`0${idx + 1}`}</span>
                                    <div className="subtitle">{title}</div>
                                </dt>
                                <dd>{content}</dd>
                            </dl>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
