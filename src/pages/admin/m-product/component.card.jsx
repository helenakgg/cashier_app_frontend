function ProductCard ({
    productName = "",
    description = "",
    productImg = "",
    onClick = (productId) => {}

}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={productImg} alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default function RenderProductCard ({
    productList = [],
}) {
    return productList.map((product, index) => {
        return (
            <ProductCard key={product.productId}
                productName={product.productName}
                description={product.description}
                productImg={product.productImg}
            />
        )
    })
}