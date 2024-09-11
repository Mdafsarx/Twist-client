import img from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"


export default function AllItems() {
    return (
        <section className="text-white pb-14 max-w-6xl mx-auto">

            <h1 className="text-3xl font-medium font-mono text-[#3CA2FA] text-center md:text-start"><span className="border-b-2 border-b-[#3CA2FA] pb-1">Popul</span>ar</h1>
    
            <div className="flex flex-col md:flex-row items-center pt-6">
                <img src={img} className="w-[231px] rounded-t-2xl md:rounded-l-xl h-52"  data-aos="zoom-in"/>
                <img src={img4} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="100"/>
                <img src={img5} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200"/>
                <img src={img2} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300"/>
                <img src={img3} className="w-[231px] rounded-b-2xl md:rounded-r-xl h-52" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="400"/>
            </div>

        </section>
    )
}
