export default function CategoryCard() {
    return (
        <div>
            <div className="w-full max-w-xs overflow-hidden border-2 rounded pb-2.5">
                <img
                    className="object-cover w-full h-56"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar" />

                <div className="p-4 text-left">
                    <h2 className="block text-xl font-bold"> John Doe </h2>
                    <span className="text-sm">Software Engineer</span>
                </div>
            </div>
        </div>
    )
}
