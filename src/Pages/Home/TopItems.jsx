import img from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import img8 from "../../assets/8.png"
import img9 from "../../assets/9.png"

const TopItems = () => {
    return (
        <section className="my-16">

            <div className="grid grid-cols-4 gap-4">

                <div className="bg-[#F9D9DA] col-span-2 h-80 relative ">
                    <img src={img2} className="size-64 absolute bottom-0" />

                    <div className="flex justify-end items-center h-80">
                        <div>
                            <h1 className="uppercase text-xl">#New Arrivals</h1>
                            <p className="text-3xl font-bold">Gaming Chair Sky Blue</p>
                        </div>
                    </div>

                </div>

                <div className="bg-[#DAF3ED] h-80"></div>
                <div className="bg-[#FFEDCD] row-span-2"></div>
                <div className="bg-[#89f0d2F2] h-80"></div>
                <div className="bg-[#D8DBEC] col-span-2 h-80"></div>
            </div>

        </section>
    )
};

export default TopItems;