import "./table.css"
import img from "../../assets/cart.gif"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Auth/AuthProvider"
import Row from "./row"
import { ColorRing } from "react-loader-spinner"
import { Link } from "react-router-dom"
import Empty from "./Empty"

export default function Cart() {

    const [data, setData] = useState([]);
    const [shipping, setShipping] = useState(5)
    const { User , refresh } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_HTTP}/Cart?email=${User?.email}`)
            .then(data => {
                setData(data.data);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }, [refresh]);

    let totalPrice = data.reduce((p, c) => c?.price + p, 0)
    totalPrice = parseInt(totalPrice)
    const handleShipping = (e) => { setShipping(e?.target?.value) }
    const finalCost = totalPrice - shipping;

    return (
        <section className="max-w-7xl mx-auto text-white mt-24 mb-11">

            <div className="flex items-start gap-24">

                {/* shopping cart */}
                <div className="w-[70%] overflow-y-auto max-h-[68vh">
                    {/* text */}
                    <div className="flex items-center justify-between border-b border-[#3CA2FA] pb-3 text-xl font-bold text-[#80EEB4]">
                        <h1>Shopping Cart</h1>
                        <h4>{data?.length} Items</h4>
                    </div>
                    {/* table */}
                    <div className="overflow-x-auto pt-2">
                        <table className="table">
                            <thead>
                                <tr className="text-white font-bold uppercase">
                                    <th>Product details</th>
                                    <th>Description</th>
                                    <th>quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <>
                                {
                                    data?.length === 0 ?
                                        loading === true
                                            ? <div className="flex flex-col items-center justify-center relative left-[320px]">
                                                <ColorRing visible={true} ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                                            </div>
                                            : <Empty />
                                        : <tbody>
                                            {
                                                data?.map((Data, i) => <Row key={i} addProduct={Data} />)
                                            }
                                        </tbody>
                                }
                            </>
                        </table>
                    </div>
                </div>

                {/* order summary */}
                <div className="w-[25%] font-bold space-y-4">
                    <h1 className="text-xl text-[#80EEB4] border-b border-[#3CA2FA] pb-3">Order Summary</h1>
                    {/* items and cost */}
                    <div className="uppercase flex text-sm items-center justify-between">
                        <p>Items {data?.length}</p>
                        <p>${totalPrice}</p>
                    </div>
                    {/* shipping */}
                    <div className="border-b border-[#3CA2FA] pb-6">
                        <label>Shipping</label>
                        <select onChange={handleShipping} className="select select-accent bg-gray-900 border-[#80EEB4] mt-4 w-full max-w-xs">
                            <option value={5}>Dhaka - $5.00</option>
                            <option value={7}>Outside Dhaka - $7.00</option>
                        </select>
                    </div>
                    {/* items and cost */}
                    <div className="uppercase flex text-sm items-center justify-between pt-2">
                        <p>Total cost</p>
                        <p>${data.length === 0 ? 0 : finalCost}</p>
                    </div>
                    <Link to={"/Checkout"} state={{ totalPrice, finalCost, shipping, Gift: true }} className="btn btn-block border-0 text-white uppercase bg-gradient-to-tr from-[#80EEB4] to-[#3CA2FA] hover:text-black">gift</Link>
                    <Link to={"/Checkout"} state={{ totalPrice, finalCost, shipping , Gift: false }} className="btn btn-block border-0 text-white uppercase bg-gradient-to-br from-[#3CA2FA] to-[#80EEB4] hover:text-black">Checkout</Link>

                </div>

            </div>

        </section>
    )
}
