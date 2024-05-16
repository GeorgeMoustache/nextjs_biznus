async function handleFetchData(id) {
    const res = await fetch("http://localhost:9999/api/shopItem")
    return res.json()
}

export default async function ShopItem({ params }) {
    const data = await handleFetchData(params.id)
    console.log("shopItemRenderData=>", data)
    return <div>id:{params.id}</div>
}
