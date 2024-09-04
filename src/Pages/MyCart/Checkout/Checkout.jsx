import { TbTruckReturn } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import "./css.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import toast from "react-hot-toast";

export default function Checkout() {
  const location = useLocation();
  const gift= location?.state?.Gift ? 2 : 0
  const navLink = useNavigate()
  const { User } = useContext(AuthContext);

  const handleConfirm = () => {

    if (location?.state?.totalPrice <= 0) return toast.error('You have to order something')

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3CA2FA",
      cancelButtonColor: "#80EEB4",
      confirmButtonText: "Confirm",
      customClass: {
        popup: 'swal2-dark',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/Cart?email=${User?.email}`)
          .then(data => {
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Order Confirmed",
                text: "We will Contact you very soon",
                icon: "success",
                customClass: {
                  popup: 'swal2-dark',
                },
              });
              navLink('/')
            }
          })
          .catch(error => toast.error(error.message))
      }
    });

  }

  return (
    <div className="max-w-6xl mx-auto text-white mt-24 flex gap-20 ">

      {/* cash */}
      <div className="w-[75%] space-y-4">
        {/* return */}
        <h1 className="flex items-center justify-center font-bold text-lg gap-1 border-2 border-[#80EEB4] p-1.5 rounded-md text-[#3CA2FA]"><TbTruckReturn className="text-3xl" />7 Days Happy Return</h1>

        {/* method */}
        <div className="border-2 border-[#80EEB4] rounded-md">
          <h1 className="text-lg p-3 text-[#3CA2FA] border-b-2 border-[#80EEB4] ">Payment Method(Please select a payment method)</h1>

          <div className="py-5 px-4 border-b-2 border-[#80EEB4]">
            <label className="block font-bold">Shipping</label>
            <label className="block text-sm">Pay on receiving the product</label>
            <select className="select select-info bg-gray-900 border-[#3CA2FA] mt-4 w-full max-w-xs">
              <option value={'Cash on delivery'}>🚚 Cash on delivery</option>
            </select>
          </div>

          <div className="py-5 px-4">
            <button onClick={handleConfirm} className="btn btn-block border-0 text-white uppercase bg-gradient-to-tr from-[#80EEB4] to-[#3CA2FA] hover:text-black">Confirm Order {location?.state?.totalPrice === 0 ? 0 : location?.state?.finalCost - gift}$</button>
          </div>

        </div>
      </div>

      {/* details */}
      <div className="w-[25%] border-2 border-[#80EEB4] rounded-md p-4">
        <h1 className="text-lg font-bold border-b-2 border-dashed border-[#80EEB4] pb-3 text-[#3CA2FA]">Checkout Summary</h1>
        <div className="flex items-center justify-between py-3 border-b-2 border-dashed border-[#80EEB4]">
          <p>Subtotal</p>
          <p>{location?.state?.totalPrice}$</p>
        </div>
        {
          location?.state?.Gift
            ? <div className="flex items-center justify-between py-3 border-b-2 border-dashed border-[#80EEB4]">
              <p>Gift </p>
              <p>{2}$</p>
            </div>
            : '' 
        }

        <div className="flex items-center justify-between py-3 border-b-2 border-dashed border-[#80EEB4]">
          <p>Shipping </p>
          <p>{location?.state?.shipping}$</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>Total</p>
          <p>{location?.state?.totalPrice === 0 ? 0 : location?.state?.finalCost - gift }$</p>
        </div>
      </div>

    </div>
  )
}
