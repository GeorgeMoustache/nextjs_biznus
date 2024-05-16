import "@/styles/home.scss"
import Banner from "./_home/banner"
import Support from "./_home/support"
import Statement from "./_home/statement"
import Product from "./_home/product"
import Author from "./_home/author"

export default function Home() {
    return (
        <>
            <Banner />
            <Support />
            <Statement />
            <Product />
            <Author />
        </>
    )
}
