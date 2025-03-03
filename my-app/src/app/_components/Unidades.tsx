"use client";


import {Casa} from "./Casa"
import {Chacara} from "./Chacara"
import {Recanto} from "./Recanto"

import { useState } from "react";

export function Unidades() {
    const [local, setLocal] = useState("casa");

    function handleClick(info) {
        setLocal(info);
    }

    return (
        <section className="bg-zinc-50 text-zinc-950 py-8 lg:pt-16 sm:px-4 overflow-hidden ">
            <div className="relative">
                <h1 className="text-4xl font-bold text-center sd:text-3xl ">
                    Nossas Unidades
                </h1>
                <div data-aos="fade-up" className="flex flex-col items-center gap-16 px-4 py-16">
                    <nav className="flex flex-row justify-center text-zinc-700 gap-10 w-fit rounded-full p-1 text-sm shadow-lg">
                        <button 
                            className={`p-2 ${local === "casa" ? "bg-zinc-200 rounded-full font-bold" : ""}`}
                            onClick={() => handleClick("casa")}
                        >
                            Casa Miyawaki
                        </button>
                        <button 
                            className={`p-2 ${local === "chacara" ? "bg-zinc-200 rounded-full font-bold" : ""}`}
                            onClick={() => handleClick("chacara")}
                        >
                            Chácara Miyawaki
                        </button>
                        <button 
                            className={`p-2 ${local === "recanto" ? "bg-zinc-200 rounded-full font-bold" : ""}`}
                            onClick={() => handleClick("recanto")}
                        >
                            Recanto Miyawaki
                        </button>
                    </nav>
                  {
                    local === "casa" ? <Casa /> : 
                    local === "chacara" ? <Chacara /> : 
                    local === "recanto" ? <Recanto /> : null
                  }
                </div>

            </div>
        </section>
    );
}
