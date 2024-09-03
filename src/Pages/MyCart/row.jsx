export default function Row({ addProduct }) {
    const { productName, description, price, category, image, brand, email } = addProduct || {}
    return (
        <tr>
            <th className="flex items-center gap-3">
                <img src={image} className="size-20 rounded-md" />
                <div className="space-y-2">
                    <p>{productName}</p>
                    <p>{category}</p>
                    <button>Remove</button>
                </div>
            </th>
            <td title={description}>{description.slice(0,20)}...</td>
            <td>{brand}</td>
            <td>{price}</td>
        </tr>
    )
}
