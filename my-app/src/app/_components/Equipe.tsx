"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/psicologo-quw6cyrr66vdwsdg4g66o5t4h0nb6w7yzc4u94brrs.png.webp",
    titulo: "PSICÓLOGO",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/medico-psiquitra-quw6ct4q16nnz4ln1dqf978cwpf3wplkyk7xdgk4t4.png.webp",
    titulo: "MÉDICO PSIQUIATRA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/nutricionista-quw6cxtwzcu3l6et9xrk3o1nvmrxz748n7hcrud5y0.png.webp",
    titulo: "NUTRICIONISTA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/fisioterapia-300x300-1-quw6cmjupcenpuv73sw19qw4r0bjetvglnnj0itw0o.png.webp",
    titulo: "FISIOTERAPEUTA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/dentistaS-quw77a2dkudac2ca41w1l0fa5d8gfhkc5djkfddp3s.png.webp",
    titulo: "DENTISTA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/fonoaudiologa-quw6cnhow6fy1gttybanu8nlce6wmiz6xsb0hsshug.png.webp",
    titulo: "FONOAUDIOLOGA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/educador-fisico-quw7f18fymzg492rtwk8njz6kt0gxlcm7raryjvrrs.png.webp",
    titulo: "EDUCADOR FÍSICO",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/MUSICOTERAPIA-quw7tcbzzukkukaka37slxzs3yhm3q5iuksuy6o120.png.webp",
    titulo: "MUSICOTERAPEUTA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/ARTETERAPIA-quw85brx4sz6vkvvarpjwf4crtf38sqbhw8q86wbq0.png.webp",
    titulo: "ARTETERAPIA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/cuidadoresdeidosos-quw8ftn1g7cgitn00b1kqrrnkpon74eexuhx5fc28o.png.webp",
    titulo: "CUIDADORES",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/cabeleireira-1-quw8pycf3x7pnix8uootm7qi27r25om9nzmbcsbb6g.png.webp",
    titulo: "CABELEIREIRA",
  },
  {
    imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/lixador-de-unha-quw6cpdd9uiioor3nc3wz86ij5xn1x6nm1lzgcppi0.png.webp",
    titulo: "MANICURE E PEDICURE",
  },
  
];

export function Equipe() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  // Função para iniciar o autoplay
  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    let autoplayInterval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000); // Troca a cada 3 segundos

    // Se o usuário interagir, para o autoplay e reinicia depois de um tempo
    emblaApi.on("pointerDown", () => {
      clearInterval(autoplayInterval);
      setTimeout(autoplay, 5000); // Reinicia autoplay após 5s de inatividade
    });

    return () => clearInterval(autoplayInterval);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      autoplay(); // Inicia autoplay ao carregar
    }
  }, [emblaApi, autoplay]);

  return (
    <section className="bg-[#2c520c] text-zinc-50 py-8 lg:py-16 px-4 overflow-hidden">
      <h1 className="text-center text-3xl md:text-4xl font-bold p-6">
        Equipe mais completa da região
      </h1>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12">
            {info.map((item, index) => (
              <Card
                data-aos="fade-up"
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%/3)]"
              >
                <CardHeader className="flex flex-col items-center">
                  <img className="w-16" src={item.imagem} alt={item.titulo} />
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
