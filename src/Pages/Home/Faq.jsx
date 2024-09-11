import img from "../../assets/questions.png"

export default function Faq() {
    return (
        <div className="max-w-6xl mx-auto  pb-16 pt-6 space-y-8 text-white">

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* title */}
                <figure className="md:w-[40%]" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
                    <img src={img} alt="Faq" className="size-80" />
                </figure>

                <div className="md:w-[60%] px-7 md:px-0" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
                    <div className="join join-vertical w-full border-2 border-[#3CA2FA]">

                        <div className="collapse collapse-arrow join-item border-b-2 border-[#3CA2FA]">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium ">How can I track my order?</div>
                            <div className="collapse-content">
                                <p className="text-balance">Once your order is confirmed, you will receive an email with a tracking link. You can use this link to monitor the status of your delivery.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b-2 border-[#3CA2FA]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Do you offer international shipping?</div>
                            <div className="collapse-content">
                                <p  className="text-balance">Yes, we ship internationally. Shipping fees and delivery times may vary depending on the destination.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b-2 border-[#3CA2FA]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium"> How long does delivery take?</div>
                            <div className="collapse-content">
                                <p  className="text-balance">Delivery typically takes between 3 days depending on your location. You will receive an estimated delivery time during checkout.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border-b-2 border-[#3CA2FA]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Can I cancel my order?</div>
                            <div className="collapse-content">
                                <p  className="text-balance">You can cancel your order within 2 after placing it, provided it hasn’t been shipped yet. Contact our customer service team for assistance.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">What payment methods are accepted?</div>
                            <div className="collapse-content">
                                <p className="text-balance">We currently only accept Cash on Delivery (COD), where you pay for the products at the time of delivery.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
