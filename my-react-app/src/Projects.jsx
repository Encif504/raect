function Projects() {
    const projects = [
        { title: "Chicks", img: "/images/chicks.jpg", text: "Our chick project focuses on providing healthy, day-old chicks to farmers and households. We offer both broiler and improved kienyeji breeds. All chicks are vaccinated and raised under proper brooding conditions to ensure high survival rates and healthy growth." },
        { title: "Broilers", img: "/images/broilers1.jpg", text: "Our broilers are carefully raised for meat production. We maintain structured feeding programs and clean, well ventilated housing to support healthy growth and efficient weight gain. Close monitoring helps us ensure the birds develop properly and remain in good condition. The result is tender, quality poultry meat supplied fresh to our local market." },
        { title: "Layers", img: "/images/layers.jpg", text: "Our layers are raised specifically for consistent and reliable egg production. We prioritize proper nutrition, clean housing, and routine health monitoring to maintain strong laying performance and good shell quality. We also sell healthy ex layers to farmers and households who want productive birds at an affordable price. " },
        { title: "Improved Kienyeji", img: "/images/improved.jpg", text: "This chicken  combines the strengths of different breeds to produce birds that are hardy, productive, and adaptable. These birds are suitable for both meat and egg production, making them ideal for farmers and households looking for versatility. We raise and sell hybrid chicks and mature birds to support small scale and growing poultry farmers." },
        { title: "Fish farming", img: "/images/Fish farming.jpg", text: "Our fish farming project provides fresh, locally raised fish to the community. We maintain clean water systems and follow proper feeding practices to ensure healthy fish growth." },
        { title: "Bee Keeping", img: "/images/beehives.jpg", text: "Our beekeeping project focuses on producing pure, natural honey while strengthening the farm ecosystem. We carefully manage our hives to maintain strong colonies and ensure clean honey harvesting practices." },
        { title: "Black Soldier Flies", img: "/images/Bsoldierfly.jpg", text: "This project plays a central role in our waste management system. We use these insects to convert organic waste into high protein feed for poultry and fish. We produce and sell dried Black Soldier Flies, live maggots, and Black Soldier Fly eggs to farmers. " }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
            <h2 className="inline-block bg-amber-900 px-4 py-2 rounded font-bold text-white mb-6 font-serif">Projects</h2>

            <p className="bg-gray-100 dark:bg-gray-400 dark:text-black text-gray-800 p-4 rounded max-w-4xl mx-auto leading-relaxed font-sans">
               Our farm operates through four key projects that work together to create a sustainable and efficient system. Each area supports the other, helping us reduce waste, improve productivity, and serve our local community with quality products
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <article key={p.title} className="bg-white dark:bg-gray-400 rounded shadow overflow-hidden flex flex-col">
                        <img src={p.img} alt={p.title} loading="lazy" className="w-full h-44 sm:h-56 object-cover" />
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-amber-800 font-extrabold mb-2 font-serif">{p.title}</h3>
                            <p className="text-gray-700 flex-1 dark:text-black font-sans">{p.text}</p>
                        </div>
                    </article>
                ))}
            </div>

            <footer className="mt-16 bg-amber-800 text-white rounded py-12 px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-2 text-sm">
                            <a href="#home" className="hover:underline">Home</a>
                            <a href="#about" className="hover:underline">About</a>
                            <a href="#contact" className="hover:underline">Contact</a>
                            <a href="#projects" className="hover:underline">Projects</a>
                            <a href="#products" className="hover:underline">Products</a>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 font-serif">Opening hours</h4>
                        <div className="text-sm space-y-1">
                            <div>Monday-Saturday</div>
                            <div>8:00 am - 6:00 pm</div>
                            <div>Closed on Sundays</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 font-serif">Contacts</h4>
                        <div className="text-sm space-y-2">
                            <div><img src="/images/email.png" alt="email" className="w-4 h-4 inline mr-2"/> grannada.enterprise@gmail.com</div>
                            <div><img src="/images/phone.png" alt="phone" className="w-4 h-4 inline mr-2"/> 0740207040</div>
                            <div><img src="/images/facebook.png" alt="facebook" className="w-4 h-4 inline mr-2"/> Grannada Farm</div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-amber-700 text-center font-extrabold">©️ Grannada farm 2026</div>
            </footer>
        </div>
    );
}

export default Projects;