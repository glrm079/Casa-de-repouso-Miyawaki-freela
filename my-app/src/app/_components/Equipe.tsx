"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useEmblaCarousel from 'embla-carousel-react';

const info = [
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/medico-geriatra-quw6cs6vucmdnin06vbsopgwbbjqp0humfkfw6lizc.png.webp",
    titulo: "MÉDICO GERIATRA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/enfermeiras-24g-quw6cjqc4uasr0zak9o5k9lqyupfrqk9l9p2koy2jc.png.webp",
    titulo: "ENFERMEIRAS 24H",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/conforto_personalizacao-quwevgz5qcgdr95ncfrn8bd5v7x45s104edqwbv8t4.png.webp",
    titulo: "PSICÓLOGO",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/medico-psiquitra-quw6ct4q16nnz4ln1dqf978cwpf3wplkyk7xdgk4t4.png.webp",
    titulo: "PSICÓLOGO",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/medico-psiquitra-quw6ct4q16nnz4ln1dqf978cwpf3wplkyk7xdgk4t4.png.webp",
    titulo: "PSICÓLOGO"
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/medico-psiquitra-quw6ct4q16nnz4ln1dqf978cwpf3wplkyk7xdgk4t4.png.webp",
    titulo: "PSICÓLOGO"
  }
];

export function Equipe() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  });

  return (
    <section className="bg-[#2c520c] text-zinc-50 py-8 lg:py-16 px-4 overflow-hidden">
      <h1 className="text-center text-3xl md:text-4xl font-bold p-6">
        Equipe mais completa da região
      </h1>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12">
            {info.map((item, index) => (
              <Card key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)]">
                <CardHeader className="flex flex-col items-center">
                  <img className="w-16" src={item.imagem} alt="" />
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-center">
                  <CardTitle>{item.titulo}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
