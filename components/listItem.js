import Link from "next/link"
import { numFormat } from "@/utils/index"

export default function ProductListItem({ item }) {
    const { id, title, imgSrc, oldPrice, price, onSale } = item

    return (
        <dl className="productListItem">
            <dt>
                <Link
                    href="/"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                />
                {onSale && <span className="sale">sale</span>}
            </dt>
            <dd>
                <div className="name">{title}</div>
                <div className="price">
                    <span className="new">{numFormat(price)}</span>
                    {oldPrice > 0 && <span className="old">{numFormat(oldPrice)}</span>}
                </div>
                <Link
                    className="btn"
                    href={`/shop/${id}`}
                >
                    Details
                </Link>
            </dd>
        </dl>
    )
}
