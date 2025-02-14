

export function Hero(){
    return(
       <section className="bg-[#2C520C] relative overflow-hidden text-zinc-50">
            <div className="container mx-auto py-16 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-10">
                        Um local ideal para
                        desfrutar da terceira idade e aproveitar ao
                        máximo a vida
                        </h1>
                        <div className="flex">
                            <a className="bg-green-500 px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <h1>
                            foto 
                        </h1>
                    </div>
                </article>
            </div>
       </section>
    )
}