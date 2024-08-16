import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import './button.css'

const Products = () => {

    // paginate
    //Todo: paginate api buja
    const [data, setData] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('')
    const [finalSearch, setFinalSearch] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0)

    useEffect(() => {
        axios(`${import.meta.env.VITE_HTTP}/Products?page=${currentPage + 1}&limit=${12}&search=${finalSearch}&category=${category}&brand=${brand}&price=${price}`)
            .then(data => {
                setData(data.data.result)
                setTotalPages(data.data.totalPages);
            }).catch(error => {
                console.log(error)
            })
    }, [currentPage, finalSearch, category, brand , price ])

    const handlePageChange = (e) => {
        setCurrentPage(e.selected);
    };

    const handleSearch = () => {
        setFinalSearch(search)
    }



    return (
        <div className="max-w-7xl mx-auto space-y-7 md:space-y-12 my-16">



            {/* filter and sort */}
            <div className="flex flex-col md:flex-row items-center justify-between ">

                {/* filter , search*/}
                <div className="flex flex-col md:flex-row items-center gap-5">

                    {/* search... */}
                    <fieldset>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button onClick={handleSearch} type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <svg fill="#80EEB4" viewBox="0 0 512 512" className="w-4 h-4 ">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input onChange={(e) => setSearch(e.target.value)} type="search" name="Search" placeholder="Search..." className="w-auto md:w-96 py-3.5 pl-10 pr-2 text-sm rounded-md focus:outline-none " />
                        </div>
                    </fieldset>

                    {/* filter */}
                    <select className="select select-bordered w-full max-w-52" onChange={(e) => {
                        if (e.target.value === 'All categories') {
                            setCategory('')
                        } else {
                            setCategory(e.target.value)
                        }
                    }}>
                        <option value={'All categories'}>All categories</option>
                        <option value={'Televisions'}>Televisions</option>
                        <option value={'Audio'}>Audio</option>
                        <option value={'Wearables'}>Wearables</option>
                        <option value={'Computers'}>Computers</option>
                        <option value={'Accessories'}>Accessories</option>
                    </select>

                    <select className="select select-bordered w-full max-w-52" onChange={(e) => {
                        if (e.target.value === 'All brands') {
                            setBrand('')
                        } else {
                            setBrand(e.target.value)
                        }
                    }}>
                        <option>All brands</option>
                        <option value={'SoundWave'}>Sound wave</option>
                        <option value={'FitGear'}>Fit gear</option>
                        <option value={'PowerTech'}>Power tech</option>
                        <option value={'VisionPlus'}>Vision plus</option>
                        <option value={'GameMaster'}>Game master</option>
                    </select>

                    <select className="select select-bordered w-full max-w-52" onChange={(e) => {
                        if (e.target.value === 'All price') {
                            setPrice('')
                        } else {
                            setPrice(e.target.value)
                        }
                    }}>
                        <option>All price</option>
                        <option value={'1-1000'}>1-1000 <span>$</span></option>
                        <option value={'1000-2000'}>1000-2000 <span>$</span></option>
                        <option value={'2000-3000'}>2000-3000  <span>$</span></option>
                    </select>

                </div>

                {/* sort */}
                <div className="dropdown dropdown-left dropdown-end mt-4 md:mt-0">
                    <div onClick={() => setOpen(true)} tabIndex={0} role="button" className="btn m-1 border-0 text-whit bg-[#80EEB4]">Sort</div>
                    <ul tabIndex={0} className={`dropdown-content menu bg-[#80EEB4] rounded-box z-[1] w-44 p-0.5 shadow ${open ? 'block' : 'hidden'}`}>
                        <li onClick={() => setOpen(false)}><a><span className="font-bold">Price:</span>high to low</a></li>
                        <li onClick={() => setOpen(false)}><a><span className="font-bold">Price:</span>low to high</a></li>
                        <li onClick={() => setOpen(false)}><a><span className="font-bold">Date:</span>Newest first</a></li>
                    </ul>
                </div>

            </div>


            {/* product's card */}
            <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-8 md:gap-10 md:ml-1 px-4 md:px-0">

                {
                    data?.map((Data, i) => <Card key={i} product={Data} />)
                }

            </div>

            {/* button paginate here */}
            <ReactPaginate
                breakLabel="..."
                previousLabel={<button className="btn btn-ghost bg-[#80EEB4] btn-sm text-black font-bold"><GrCaretPrevious /></button>}
                nextLabel={<button className="btn btn-ghost bg-[#80EEB4] btn-sm text-black font-bold"><GrCaretNext /></button>}
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                containerClassName="pagination-container"
                pageClassName="pagination-page"
                pageLinkClassName="pagination-link"
                previousClassName="pagination-previous"
                nextClassName="pagination-next"
                breakClassName="pagination-break"
                activeClassName="pagination-active"
            />

        </div>
    );
};

export default Products;