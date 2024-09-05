import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


export default function Row({ addProduct }) {
    const { productName, description, price, category, image, brand , _id} = addProduct || {};
    const { setRefresh , refresh } = useContext(AuthContext)
    return (
        <tr>
            <th className="flex items-center gap-3">
                <img src={image} className="size-20 rounded-md" />
                <div className="space-y-2">
                    <p>{productName}</p>
                    <p>{category}</p>
                    <button onClick={() => {

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
                                axios.delete(`${import.meta.env.VITE_HTTP}/OneCart?id=${_id}`)
                                    .then(data => {
                                        if (data.data.deletedCount) {
                                            Swal.fire({
                                                title: "Deleted",
                                                text: "Your file has been deleted.",
                                                icon: "success",
                                                customClass: {
                                                    popup: 'swal2-dark',
                                                },
                                            });
                                            setRefresh(!refresh)
                                        }
                                    })
                                    .catch(error => toast.error(error.message))
                            }
                        });

                    }} className="hover:underline">Remove</button>
                </div>
            </th>
            <td title={description}>{description.slice(0, 20)}...</td>
            <td>{brand}</td>
            <td>{price}</td>
        </tr>
    )
}
