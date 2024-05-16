import Link from "next/link"
import ProductListItem from "@/components/listItem"

async function handleFetchData() {
    const res = await fetch("http://localhost:9999/api/shopList")
    return res.json()
}

export default async function Product() {
    const { data } = await handleFetchData()
    const productList = data.filter((item) => item.hot)

    return (
        <div id="product">
            <div className="wrap">
                <div className="main-title">
                    <span>SHOP PRODUCTS</span>
                    <div className="date">Open 24/7/365.</div>
                </div>
                <div className="item-list">
                    {productList.map((item) => (
                        <ProductListItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
                <div className="more">
                    <Link
                        className="btn"
                        href="/shop"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    )
}
