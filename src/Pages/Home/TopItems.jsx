import img from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import img8 from "../../assets/8.png"
import img9 from "../../assets/10.png"
import img12 from "../../assets/12.png"
import img11 from "../../assets/9.png"

const TopItems = () => {
    return (
        <section className="my-16">

            <div className="grid grid-cols-4 gap-4">

                <div className="bg-[#F9D9DA] col-span-2 h-80 relative pl-10 pr-16">
                    <figure>
                        <img src={img9} className="size-72 absolute bottom-0 -mb-[25.2px]" />
                    </figure>

                    <div className="flex justify-end items-center h-80">
                        <div className="space-y-1">
                            <h1 className="uppercase text-red-600 font-semibold">#New Arrivals</h1>
                            <p className="text-2xl font-black">Computer Blue</p>
                            <button className="uppercase font-normal pt-0.5 border-b-2 border-black hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#DAF3ED] h-80 relative pt-8">

                    <figure className="flex justify-center">
                        <img src={img12} className="size-52 absolute bottom-0 -mb-6" />
                    </figure>

                    <div className="flex justify-center">
                        <div className="space-y-1 text-center">
                            <h1 className="uppercase text-[#7CD4BB] font-semibold">#Featured</h1>
                            <p className="text-2xl font-black">Laptop</p>
                            <button className="uppercase font-normal pt-0.5 border-b-2 border-black hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                        </div>
                    </div>

                </div>

                <div className="bg-[#FFEDCD] row-span-2 relative">
                    <figure>
                        <img src={img2} className="size-80 absolute bottom-0" />
                    </figure>

                    <div className="flex items-center justify-center  h-80">
                        <div className="space-y-1 ">
                            <h1 className="uppercase text-orange-400  font-semibold">#Trading now</h1>
                            <p className="text-2xl font-black">Gaming Chair</p>
                            <button className="uppercase font-normal pt-0.5 border-b-2 border-black hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#89f0d2F2] h-80 relative pt-8">

                    <figure className="flex justify-center">
                        <img src={img7} className="size-44 absolute bottom-0 " />
                    </figure>

                    <div className="flex justify-center">
                        <div className="space-y-1 text-center">
                            <h1 className="uppercase text-green-600 font-semibold">#most popular</h1>
                            <p className="text-2xl font-black">Laptop</p>
                            <button className="uppercase font-normal pt-0.5 border-b-2 border-black hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#D8DBEC] col-span-2 h-80 relative pl-10 pr-20">
                    <figure>
                        <img src={img} className="size-72 absolute bottom-0 -mb-[37px]" />
                    </figure>

                    <div className="flex justify-end items-center h-80">
                        <div className="space-y-1">
                            <h1 className="uppercase text-purple-600 font-semibold">#hot collection</h1>
                            <p className="text-2xl font-black">Android Tv</p>
                            <button className="uppercase font-normal pt-0.5 border-b-2 border-black hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
};

export default TopItems;