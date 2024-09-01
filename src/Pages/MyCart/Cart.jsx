import "./table.css"
import img from "../../assets/cart.gif"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Auth/AuthProvider"

export default function Cart() {

    const [data, setData] = useState([])
    const { User } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:3000/Cart?email=${User?.email}`)
            .then(data => setData(data.data))
            .catch(error => console.log(error.message))
    }, [])


    return (
        <section className="max-w-7xl mx-auto text-white my-24">

            <div className="flex items-start gap-24">
                {/* shopping cart */}
                <div className="w-[70%]">
                    {/* text */}
                    <div className="flex items-center justify-between border-b pb-3 text-xl font-bold">
                        <h1>Shopping Cart</h1>
                        <h4>{data?.length} Items</h4>
                    </div>
                    {/* table */}
                    <div className="overflow-x-auto pt-2">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-white font-bold uppercase">
                                    <th>Product details</th>
                                    <th>Description</th>
                                    <th>quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th className="flex items-center gap-3">
                                        <img src={img} className="size-20" />
                                        <div className="space-y-2">
                                            <p>Laptop</p>
                                            <p>PowerTech</p>
                                            <button>Remove</button>
                                        </div>
                                    </th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* order summary */}
                <div className="w-[25%] font-bold space-y-4">
                    <h1 className="text-xl border-b pb-3">Order Summary</h1>
                    {/* items and cost */}
                    <div className="uppercase flex text-sm items-center justify-between">
                        <p>Items {data?.length}</p>
                        <p>$300</p>
                    </div>
                    {/* shipping */}
                    <div className="border-b border-white pb-6">
                        <label>Shipping</label>
                        <select className="select  select-info bg-gray-900 border-[#3CA2FA] mt-4 w-full max-w-xs">
                            <option>Dhaka - $5.00</option>
                            <option>Outside Dhaka - $7.00</option>
                        </select>
                    </div>
                    {/* items and cost */}
                    <div className="uppercase flex text-sm items-center justify-between pt-2">
                        <p>Total cost</p>
                        <p>$300</p>
                    </div>
                    <button className="btn btn-block uppercase">gift</button>
                    <button className="btn btn-block uppercase">Checkout</button>

                </div>
            </div>

        </section>
    )
}
