"use client";
import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



export function Casa(){


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
            Casa de Repouso Miyawaki
        </h1>
        {/* Carrossel de imagens */}
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
            <img
                src="/bg.jpeg"
                alt="Foto 1 da Chácara"
                className="rounded-lg w-full h-96 object-cover hover:scale-110 flex-shrink-0"
            />
            <img
                src="/bg.jpeg"
                alt="Foto 2 da Chácara"
                className="rounded-lg w-full h-96 object-cover hover:scale-110 flex-shrink-0"
            />
            </div>
        </div>
        <h2 className="text-[#2c520c] font-bold text-center">
            RUA FRANCISCO MARTINS FEITOSA, 105,
            ALTO DO IPIRANGA,
            MOGI DAS CRUZES/SP    
        </h2> 
        <div className="w-full h-[450px]">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.96220963008!2d-46.21020972559329!3d-23.533861578818673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd812741ca887%3A0x73b23b87edd68c07!2sCasa%20de%20Repouso%20Miyawaki!5e0!3m2!1spt-BR!2sbr!4v1740273998579!5m2!1spt-BR!2sbr"
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