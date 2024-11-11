import React, { useContext } from 'react';
import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbCameraSearch } from "react-icons/tb";
import { AuthContext } from '../../Auth/AuthProvider';
import Lottie from 'lottie-react';
import lottieImage from '../../../public/Animation - 1731025901682.json'
import lottieImage2 from '../../../public/Animation empty - 1731041962497.json'
import "./button.css";
import Take_Image_Modal from './Take_Image_Modal';



const Products = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [finalSearch, setFinalSearch] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);
    const [sort, setSort] = useState('');
    const { startListening, stopListening, listening, transcript } = useContext(AuthContext);
    const [lastTranscript, setLastTranscript] = useState('');
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        if (transcript.trim()) {
            setLastTranscript(transcript);
        }
    }, [transcript]);


    useEffect(() => {
        setDataLoading(true)
        axios(`${import.meta.env.VITE_HTTP}/Products?page=${currentPage + 1}&limit=${12}&search=${finalSearch || lastTranscript}&category=${category}&brand=${brand}&price=${price}&sort=${sort}`)
            .then((data) => {
                setData(data.data.result);
                setTotalPages(data.data.totalPages);
                setDataLoading(false)
            })
            .catch((error) => {
                toast.error(error);
                setDataLoading(false)
            });
    }, [currentPage, finalSearch, lastTranscript, category, brand, price, sort]);


    const handlePageChange = (e) => {
        setCurrentPage(e.selected);
    };

    const handleSearch = () => {
        setLastTranscript('')
        setFinalSearch(search);
    };


    return (
        <div className="max-w-7xl mx-auto space-y-7 md:space-y-16 my-12 pt-10  md:pb-4 md:pt-20">

            {/* filter and sort */}
            <div className="flex flex-col md:flex-row items-center justify-between text-white">
                {/* filter , search*/}
                <div className="flex flex-col md:flex-row items-center gap-5" >
                    {/* search... */}
                    <fieldset data-aos="zoom-in" data-aos-duration="500">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 px-1 text-white flex items-center rounded-l-md bg-[#3CA2FA]">
                                <button
                                    onClick={handleSearch}
                                    type="button"
                                    title="search"
                                    className="p-1 focus:outline-none focus:ring">
                                    <IoSearchSharp className="text-xl" />
                                </button>
                            </span>
                            <input
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setLastTranscript('')
                                }}
                                type="text"
                                name="Search"
                                placeholder="S E A R C H...."
                                value={search || transcript || lastTranscript}
                                className="w-auto md:w-96 py-3.5 pl-12  text-sm rounded-md focus:outline-none bg-gray-800" />
                            <span className="absolute inset-y-0 right-0 px-1.5 flex items-center">
                                <div
                                    type="button"
                                    className="focus:outline-none focus:ring">
                                    <div className="flex items-center">
                                       <TbCameraSearch  onClick={() => document.getElementById('modal_2').showModal()} className="text-2xl" />
                                        <div className="h-6 border-l-2 border-gray-300 ml-2 mr-1 "></div>
                                        <MdOutlineKeyboardVoice className={`text-2xl hover:text-[#80EEB4] ${listening ? 'text-[#80EEB4]' : ''}`} onClick={() => {
                                            setSearch('')
                                            setFinalSearch('')
                                            setLastTranscript('')
                                            startListening()
                                        }} />
                                    </div>
                                </div>
                            </span>
                        </div>
                    </fieldset>

                    {/* filter */}
                    <select
                        className="select bg-gray-800 select-bordered w-full max-w-52"
                        onChange={(e) => {
                            if (e.target.value === "All categories") {
                                setCategory("");
                                // setBrand('')
                                // setPrice(0)
                            } else {
                                setCategory(e.target.value);
                                // setBrand('');
                                // setPrice(0)
                            }
                        }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"
                    >
                        <option value={"All categories"}>All categories</option>
                        <option value={"Televisions"}>Televisions</option>
                        <option value={"Audio"}>Audio</option>
                        <option value={"Wearables"}>Wearables</option>
                        <option value={"Computers"}>Computers</option>
                        <option value={"Accessories"}>Accessories</option>
                    </select>

                    <select
                        className="select bg-gray-800 select-bordered w-full max-w-52"
                        onChange={(e) => {
                            if (e.target.value === "All brands") {
                                setBrand("");
                                // setCategory('')
                                // setPrice(0)
                            } else {
                                setBrand(e.target.value);
                                // setCategory('')
                                // setPrice(0)
                            }
                        }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400"
                    >
                        <option>All brands</option>
                        <option value={"SoundWave"}>Sound wave</option>
                        <option value={"FitGear"}>Fit gear</option>
                        <option value={"PowerTech"}>Power tech</option>
                        <option value={"VisionPlus"}>Vision plus</option>
                        <option value={"GameMaster"}>Game master</option>
                    </select>

                    <select
                        className="select bg-gray-800 select-bordered w-full max-w-52"
                        onChange={(e) => {
                            if (e.target.value === "All price") {
                                setPrice(0);
                                // setBrand('')
                                // setCategory('')
                            } else {
                                setPrice(e.target.value);
                                // setBrand('')
                                // setCategory('')
                            }
                        }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="600"
                    >
                        <option>All price</option>
                        <option value={"1-1000"}>
                            1-1000 <span>$</span>
                        </option>
                        <option value={"1000-2000"}>
                            1000-2000 <span>$</span>
                        </option>
                        <option value={"2000-3000"}>
                            2000-3000 <span>$</span>
                        </option>
                    </select>
                    
                </div>

                {/* sort */}
                <select className="select bg-gray-800 select-bordered w-full max-w-24 mt-4 md:mt-0" onClick={(e) => {
                    setSort(e.target.value)
                }} data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800">
                    <option value={""} disabled selected>Sort</option>
                    <option value={"low to high"}>Price: low to high</option>
                    <option value={"high to low"}>Price: high to low</option>
                    <option value={"newest first"}>Date:  Newest first</option>
                    <option value={"oldest first"}>Date:  oldest first</option>
                </select>

            </div>

            {/* voice search modal */}
            {
                listening && <div className="absolute top-0 left-[38%] z-50">
                    <div className='-mt-14'>
                        <div className="bg-gray-800 text-white p-5 h-72 w-[420px]">
                            <div className='flex justify-end'>
                                <button onClick={() => stopListening(false)} className="btn btn-sm btn-circle btn-ghost">✕</button>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <h3 className="text-lg">{transcript ? transcript : lastTranscript ? lastTranscript : 'Listening...'}</h3>
                                <Lottie animationData={lottieImage} loop className="w-full h-40 p-3" autoplay />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* take image for search modal */}
            {
                <Take_Image_Modal />
            }

            {/* product's card */}
            <>
                {
                    dataLoading
                        ? <div className="flex flex-col items-center justify-center min-h-[25vh]">
                            <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                        </div>
                        :
                        data?.length === 0
                            ? <div className='text-white flex flex-col items-center'>
                                <Lottie animationData={lottieImage2} loop className="w-full h-72" autoplay />
                                <div className='text-center -mt-5'>
                                    <h2 className='text-xl font-bold pb-1'>No results found</h2>
                                    <p>Your search "{finalSearch || lastTranscript}" did not  <br /> match any products
                                        Please try again.</p>
                                </div>
                            </div>
                            : <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-8 md:gap-10 md:ml-1 px-4 md:px-0">
                                {data?.map((Data, i) => (
                                    <Card key={i} product={Data} />
                                ))}
                            </div>
                }
            </>

            {/* button paginate here */}
            <ReactPaginate
                breakLabel="..."
                previousLabel={
                    <button className="btn btn-ghost bg-[#80EEB4] btn-sm text-black font-bold">
                        <GrCaretPrevious />
                    </button>
                }
                nextLabel={
                    <button className="btn btn-ghost bg-[#80EEB4] btn-sm text-black font-bold">
                        <GrCaretNext />
                    </button>
                }
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
