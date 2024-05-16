import "@/styles/shopList.scss"
import Link from "next/link"
import ProductListItem from "@/components/listItem"

async function handleFetchData() {
    const res = await fetch("http://localhost:9999/api/shopList")
    return res.json()
}

export default async function Shop() {
    const { data } = await handleFetchData()
    const featuredItem = data.find((item) => item.featured)
    const productList = data.filter((item) => !item.featured)

    return (
        <div id="shop-list">
            <div className="black-label">
                <div className="wrap">Shop Our Products</div>
            </div>
            <div className="container">
                <div className="wrap">
                    <Link
                        className="featured-item"
                        style={{ backgroundImage: `url(${featuredItem.imgSrc})` }}
                        href="/"
                    >
                        <span className="btn label">Featured Item</span>
                        <div className="info">
                            <div className="name">{featuredItem?.title}</div>
                            <div className="price">{featuredItem?.price}</div>
                        </div>
                    </Link>
                    <div className="item-container">
                        <div className="filter">
                            <div className="title">Shop By Category</div>
                            <ul className="list">
                                <li>All</li>
                                <li>Gift Cards</li>
                                <li>Tents</li>
                                <li>Accessories</li>
                                <li>Pack</li>
                            </ul>
                        </div>
                        <div className="item-list">
                            {productList.map((item) => (
                                <ProductListItem
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
