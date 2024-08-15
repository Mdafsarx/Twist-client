import Card from "./Card";

const Products = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-12 mb-20">

            <fieldset className="flex justify-center pt-10">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Search..." className="w-auto md:w-96 py-3 pl-10 pr-2 text-sm rounded-md focus:outline-none " />
                </div>
            </fieldset>

            <div className="flex items-center justify-between">

                <select className="select select-bordered w-full max-w-52">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

            </div>

            {/* product's card */}
            <div className="grid grid-cols-3 gap-10 ml-1">

               <Card/>
               

            </div>

        </div>
    );
};

export default Products;