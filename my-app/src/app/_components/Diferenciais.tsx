import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const info = [
    {
      imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/cuidados-quwe338ldflp74ds2o46fz745dt4qscrvx8y8jy6oo.png.webp",  
      titulo: "Cuidado Individualizado com Carinho e Amor",
      descricao: "Desenvolvemos um plano de cuidados adaptado às necessidades específicas de cada residente, sempre com carinho e amor. Este plano é minuciosamente avaliado e revisado por profissionais de oito áreas distintas, garantindo um enfoque abrangente que promove o bem-estar físico, mental e emocional de todos."
    },
    {
        imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/ambientealegre-quweeixwiv9agbrram2rs3b0c5fwe7r7gizmfqzqzc.png.webp",    
      titulo: "Ambiente Alegre e Acolhedor",
      descricao: "Nosso residencial é um espaço vibrante, criado por equipes apaixonadas pelo cuidado de idosos e suas famílias. Promovemos a integração e o convívio social por meio de atividades diárias e eventos comemorativos, realizados quinzenalmente, proporcionando momentos de alegria e conexão para todos."
    },
    {
        imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/conforto_personalizacao-quwevgz5qcgdr95ncfrn8bd5v7x45s104edqwbv8t4.png.webp",    
      titulo: "Conforto e Personalização",
      descricao: "Nossas acomodações individuais e para casais são projetadas para oferecer conforto, segurança e privacidade. Os residentes têm a liberdade de personalizar seus espaços de acordo com suas preferências, podendo até trazer seus próprios móveis e decorações, tornando seu lar verdadeiramente acolhedor e especial."
    },
    {
        imagem: "https://casaderepousomiyawaki.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/elderly-quw6cgwtkc6xs73e0qg9usbd6p3c4n92kvqm4v2920.png.webp",    
      titulo: "Apoio a Idosos em Todos os Níveis de Dependência",
      descricao: "Atendemos idosos com diversos graus de dependência, desde aqueles ativos e independentes até aqueles que utilizam cadeira de rodas, estão acamados ou enfrentam condições como Alzheimer e outras demências. Nossa equipe, sempre com muito amor, está preparada para oferecer o suporte necessário, garantindo cuidado, dignidade e carinho a cada residente."
    }
  ];
  
  export function Diferenciais() {
    return (
      <section className="bg-zinc-50 py-8 lg:py-16 px-4 overflow-hidden ">
        <h1 className="text-center text-3xl md:text-4xl font-bold p-12">
            Nossos Diferenciais
        </h1>
        <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
          {info.map((item, index) => (
            <Card key={index} className="w-full md:w-1/2 lg:w-1/3">
              <CardHeader className=" flex flex-col items-center">
                <img className="w-16" src={item.imagem} alt="" />
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-center">
                <CardTitle>{item.titulo}</CardTitle>
                <p>{item.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }