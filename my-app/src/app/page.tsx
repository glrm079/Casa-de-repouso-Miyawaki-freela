import {Header} from "./_components/Header"
import { Hero } from "./_components/Hero";
import {About} from"./_components/About";
import {Diferenciais} from"./_components/Diferenciais";
import {Equipe} from"./_components/Equipe";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Diferenciais/>
      <Equipe/>
    </>
    
  );
}
