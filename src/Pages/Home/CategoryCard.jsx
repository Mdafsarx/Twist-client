export default function CategoryCard({product}) {
    const { productName, description, price, category, ratings, creationDate, image, brand } = product || {};

    return (
        <div>
            <div className="w-full max-w-xs overflow-hidden border-2 rounded pb-2.5">
                <img
                    className="object-cover w-full h-56"
                    src={image}
                    alt={productName} />

                <div className="p-4 text-left">
                    <h2 className="block text-xl font-bold">{productName}</h2>
                  <div className="flex items-center justify-between pt-1">
                      <p className="text-sm">${price}</p>
                      <button className="btn btn-sm text-xs bg-[#80EEB4] hover:bg-[#3CA2FA] hover:text-white border-0 text-black">Add to cart</button>
                  </div>
                </div>
            </div>
        </div>
    )
}
