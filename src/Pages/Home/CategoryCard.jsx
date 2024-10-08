import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default function CategoryCard({ product }) {
    const { productName, description, price, category, ratings, creationDate, image, brand } = product || {};
    const { User } = useContext(AuthContext);
    const newProduct = { productName, description, price, category, ratings, creationDate, image, brand , email: User?.email}
    const handleCart = () => {
        if (!User?.email) return toast.error("Login first", {
            style: {
                borderRadius: '10px',
                background: '#000000',
                color: '#fff',
            },
        })
        axios.post(`${import.meta.env.VITE_HTTP}/Cart`, newProduct)
            .then(data => {if(data.data.insertedId)toast.success("Added successful", {
                style: {
                    borderRadius: '10px',
                    background: '#000000',
                    color: '#fff',
                },
            })})
            .catch(error => toast.error(error.message, {
                style: {
                    borderRadius: '10px',
                    background: '#000000',
                    color: '#fff',
                },
            }))
    }

    return (
        <div data-aos="zoom-in" data-aos-duration="500">
            <div className="w-full max-w-xs overflow-hidden border-2 rounded-md pb-2.5">
                <img
                    className="object-cover w-full h-56"
                    src={image}
                    alt={productName} />

                <div className="p-4 text-left">
                    <h2 className="text-xl font-bold hidden md:block" title={productName}>{productName.slice(0, 20)}...</h2>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-y-0 pt-1">
                        <p className="text-sm">${price}</p>
                        <button onClick={handleCart} className="btn btn-sm text-xs bg-[#80EEB4] hover:bg-[#3CA2FA] hover:text-white border-0 text-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
