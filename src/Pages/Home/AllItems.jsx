import img from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/4.jpg"
import img5 from "../../assets/5.jpg"

export default function AllItems() {
    return (
        <section className="text-white pb-14 max-w-6xl mx-auto">

            <h1 className="text-3xl font-medium font-mono text-[#3CA2FA]"><span className="border-b-2 border-b-[#3CA2FA] pb-1">Popul</span>ar</h1>

            <div className="flex items-center pt-6">
                <img src={img} className="w-[231px] h-52"  data-aos="zoom-in" data-aos-duration="1000"/>
                <img src={img4} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200"/>
                <img src={img5} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"/>
                <img src={img2} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"/>
                <img src={img3} className="w-[231px] h-52" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"/>
            </div>

        </section>
    )
}
