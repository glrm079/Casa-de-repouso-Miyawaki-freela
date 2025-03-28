"use client";
import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";

export function Chacara() {
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

  return (
    <div className="py-16 sm:px-4 px-1 rounded-2xl flex gap-12 flex-col w-full">
      <h1 className="text-center font-bold text-3xl">Chácara Miyawaki</h1>

      {/* Carrossel de imagens */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* <div className="flex">
          {["areaexterna2.4.jpeg.webp", "areaexterna2.3-2.jpeg.webp", "areaexterna2.1.jpeg.webp", "animalunidade2.jpeg.webp", "quartounidade2.3.jpeg.webp", "salaunidade2.jpeg.webp", "salaunidade2.jpeg.webp"].map((image, index) => (
            <Image
              key={index}
              src={`https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/2024/10/${image}`}
              alt={`Foto ${index + 1} da Chácara`}
              width={800}
              height={500}
              className="rounded-lg w-full h-96 sm:h-[500px] object-cover flex-shrink-0"
            />
          ))}
        </div> */}
      </div>

      <h2 className="text-[#2c520c] font-bold text-center">
        RUA CONCEIÇÃO NOGUEIRA RIBEIRO, 70, MOGI MODERNO, MOGI DAS CRUZES/SP
      </h2>

      {/* Mapa de localização */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8605803120877!2d-46.1852126!3d-23.548606900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8f155c0df43%3A0xd409ee987e631145!2sR.%20Concei%C3%A7%C3%A3o%20Nogueira%20Ribeiro%2C%2070%20-%20Jardim%20Nathalie%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008725-070!5e1!3m2!1spt-BR!2sbr!4v1740317571827!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
