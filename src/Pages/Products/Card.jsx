export default function Card({ product }) {
    const { productName, description, price, category, ratings, creationDate, image, brand } = product || {};
    const Rating = Math.round(ratings)
    return (
        <>
            <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg w-72 md:w-auto" data-aos="fade-up" data-aos-duration="1000" >

                <div className="px-4 py-2">
                    <h1 className="md:text-lg font-black text-[#3CA2FA] uppercase">{productName}</h1>
                    <div className="hidden md:flex items-center gap-2">
                        <p><span className="font-bold">Brand:</span> {brand}</p>
                        <p><span className="font-bold">Category:</span> {category}</p>
                    </div>
                    <div className="flex md:hidden items-center gap-2">
                        <p><span className="font-bold">Brand</span> {brand}</p>
                        <p><span className="font-bold">Category</span> {category}</p>
                    </div>
                    <p title={description} className="hidden md:block"><span className="font-bold">Des:</span> {description.slice(0, 35)}....</p>
                    <p><span className="font-bold">Date:</span> {creationDate}</p>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-black">
                    <button className="text-[#80EEB4] hover:underline">Details</button>
                    <button className="btn btn-sm bg-[#3CA2FA] hover:bg-[#3CA2FA] hover:text-black border-0 text-white">Add to cart</button>
                </div>

                <img
                    className="object-cover w-full h-48"
                    src={image}
                    alt={productName}
                />

                <div className="flex items-center justify-between px-4 py-2 bg-black">

                    <h1 className="text-lg font-bold text-[#80EEB4]">${parseInt(price)}</h1>
                    <div className="rating">
                        <input type="radio" name="rating-2" className={`mask mask-star-2 ${Rating >= 1 ? 'bg-[#80EEB4]' : 'bg-[#80EEB44D] '}`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 ${Rating >= 2 ? 'bg-[#80EEB4]' : 'bg-[#80EEB44D] '}`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 ${Rating >= 3 ? 'bg-[#80EEB4]' : 'bg-[#80EEB44D] '}`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 ${Rating >= 4 ? 'bg-[#80EEB4]' : 'bg-[#80EEB44D] '}`} />
                        <input type="radio" name="rating-2" className={`mask mask-star-2 ${Rating >= 5 ? 'bg-[#80EEB4]' : 'bg-[#80EEB44D] '}`} />
                    </div>

                </div>

            </div>
        </>
    )
}
