
export function Header(){
    return(
        <section className="overflow-hidden  bg-[#2c520c]">
            <div className="container mx-auto relative">
                <article className="flex flex-row justify-between items-center px-16 py-3 text-zinc-50 ">
                    <div>
                        <img className="w-16" src="/logo.webp" alt="Logo" />
                    </div>
                    <nav className="flex-row items-center gap-4 hidden md:flex">
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a href="#">Home</a>
                        <a className="bg-green-500 px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                    </nav>

                </article>
            </div>
        </section>
    )
}