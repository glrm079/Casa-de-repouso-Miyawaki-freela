import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




export function Hero(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // duração da animação em milissegundos
          once: true, // anima apenas uma vez
        });
      }, []);
      
    return(
       <section className="sm:bg-[url('/bg.jpeg')]  bg-[url('/bg-sd.jpeg')] relative overflow-hidden text-zinc-50 bg-no-repeat bg-cover bg-center pt-20">
            <div className="container mx-auto py-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                     className="space-y-6 flex justify-center flex-col md:p-10">
                        <h1 className="text-3xl md:text-4xl font-bold leading-10">
                        Um local ideal para
                        desfrutar da terceira idade e aproveitar ao
                        máximo a vida
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi praesentium officia modi qui consequuntur a corrupti aspernatur laudantium perferendis veritatis?</p>
                        <div className="flex">
                            <a className="bg-[#66a124] px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                        </div>
                    </div>
                </article>
            </div>
       </section>
    )
}