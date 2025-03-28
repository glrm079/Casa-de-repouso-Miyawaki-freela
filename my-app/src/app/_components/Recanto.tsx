"use client";
import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";




export function Recanto(){
 const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
      });
    
      const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    
      const startAutoplay = useCallback(() => {
        if (!emblaApi) return;
    
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
    
        autoplayRef.current = setInterval(() => {
          if (emblaApi) {
            emblaApi.scrollNext();
          }
        }, 3000);
    
        emblaApi.on("pointerDown", () => {
          if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
          }
          setTimeout(startAutoplay, 5000);
        });
      }, [emblaApi]);
    
      useEffect(() => {
        if (emblaApi) {
          startAutoplay();
        }
        return () => {
          if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
          }
        };
      }, [emblaApi, startAutoplay]);




    return(
        <div className="py-16 sm:px-4 px-1 rounded-2xl flex gap-12 flex-col w-full">
        <h1 className="text-center font-bold text-3xl">
            Recanto Santana
        </h1>
         {/* Carrossel de imagens */}
        {/* <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
            <img
                src="https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/casaderepousomogidascruzes9.jpeg.webp"
                alt="Foto 1 da Chácara"
                className="rounded-lg w-full  h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
            <img
                src="https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/casaderepousomogidascruzes7.jpeg.webp"
                alt="Foto 2 da Chácara"
                className="rounded-lg w-full h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
            <img
                src="https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/casaderepousomogidascruzes3.jpeg.webp"
                alt="Foto 2 da Chácara"
                className="rounded-lg w-full h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
            <img
                src="https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/casaderepousomogidascruzes4.jpeg.webp"
                alt="Foto 2 da Chácara"
                className="rounded-lg w-full h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
             <img
                src="https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/casaderepousomogidascruzes10.jpeg.webp"
                alt="Foto 2 da Chácara"
                className="rounded-lg w-full h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
            </div>
        </div> */}
        <h2 className="text-[#2c520c] font-bold text-center">
            RUA DUARTE DE FREITAS, 274,
            MONTE LÍBANO,
            MOGI DAS CRUZES/SP  
        </h2> 
        <div className="w-full h-[450px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.5798946133852!2d-46.18165283049122!3d-23.521005498676704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8382d7638d3%3A0x9092aa8be42da57!2sR.%20Duarte%20de%20Freitas%2C%20274%20-%20Parque%20Monte%20Libano%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008780-240!5e0!3m2!1spt-BR!2sbr!4v1740318070512!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
    )
}