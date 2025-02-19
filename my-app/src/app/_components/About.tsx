import Image from "next/image"
export function About(){
    return(
       <section className="bg-amber-50 py-8 lg:py-16 px-4 px">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12  items-center ">
                <div className="relative w-full  h-[400px] overflow-hidden rounded-3xl">
                    <Image  src="/imagem-sobre.png" alt="idosa sorindo" fill quality={100} className="object-cover priority hover:scale-110  duration-300" />
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-bold">
                        Sobre
                    </h1>
                    <p>
                    Em nossas 3 unidades, você entenderá a fusão perfeita da tradição e inovação. Nossas casas ficam localizadas nos bairros do Alto Ipiranga, Mogi Moderno e Parque Monte Líbano.  Cada unidade reflete nosso compromisso com o cuidado e o bem-estar dos idosos. Entendemos que cada idoso tem sua história e necessidade única, por isso oferecemos uma gama diversa de atividades terapêuticas.
                    </p>
                    <ul className=" flex gap-5 flex-col">
                        <li className="flex flex-row items-center gap-2">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00ff91"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#22C55E" stroke-width="1.5"></circle> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Aberto desde 2016
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00ff91"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#22C55E" stroke-width="1.5"></circle> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Cuidado Individualizado
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00ff91"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#22C55E" stroke-width="1.5"></circle> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            3 Unidades disponiveis 
                        </li>
                    </ul>
                    <div className="flex">
                            <a className="bg-green-500 text-zinc-50 px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                    </div>
                </div>
            </div>
       </section>
    )
}