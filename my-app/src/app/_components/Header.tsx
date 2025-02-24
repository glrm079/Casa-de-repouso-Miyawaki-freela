"use client"; // <- Adicione esta linha no topo

import { useState } from "react";

export function Header() {
    const [modal, setModal] = useState(false);
   


    return (
        <section id="header" className="overflow-hidden bg-[#2c520c] shadow-md fixed w-full z-40">
            <div className="container mx-auto relative">
                <article className="flex flex-row justify-between items-center px-5 sm:px-16 py-2 text-zinc-50">
                    <div>
                        <img className="w-14" src="/logo.webp" alt="Logo" />
                    </div>

                    <nav className="hidden md:flex flex-row items-center gap-4">
                        <a href="#Hero">Home</a>
                        <a href="#About">Sobre</a>
                        <a href="#Diferenciais">Diferenciais</a>
                        <a href="#Equipe">Equipe</a>
                        <a href="#Unidades">Unidades</a>
                        <a className="bg-[#66a124] px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                    </nav>

                    {modal === false ? (
                        <svg 
                            onClick={() => setModal(true)} 
                            className="w-10 sm:hidden cursor-pointer" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 7L4 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M20 12L4 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M20 17L4 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                        </svg>
                    ) : (
                      
                        <svg
                        onClick={() => setModal(false)}
                        className="w-10"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                </article>
                {modal === true ? (
                    <div data-aos="fade-down">
                    <nav className="flex flex-col text-zinc-50 items-center gap-4 p-3">
                        <a href="@Hero">Home</a>
                        <a href="#About">Sobre</a>
                        <a href="#Diferenciais">Diferenciais</a>
                        <a href="#Equipe">Equipe</a>
                        <a href="#Unidades">Unidades</a>
                       <a className="bg-[#66a124] px-5 py-2 rounded font-semibold flex justify-center items-center" href="#">Entre em contato</a>
                   </nav>
               </div>):<>
               </>}
                    
            </div>
        </section>
        
    );
}
