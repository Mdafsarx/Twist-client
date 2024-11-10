
export default function FeatureCard({ feature, one, two, three, icon }) {
    return (
        <div className="card w-80 h-[280px]">
            <div>
                {icon}
                <h2 className='text-xl font-bold pb-3'>{feature}</h2>
                <ul className='list-disc space-y-2 pl-3'>
                    <li className="text-pretty">{one}.</li>
                    <li className="text-pretty">{two}.</li>
                    <li className="text-pretty">{three}.</li>
                </ul>
            </div>
        </div>
    )
}
