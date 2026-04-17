import JsonInfo from "../../components/JsonInfo"
export function About() {
    return (
        <>        <div className="w-full flex"
            id="sobre"
        >
            <div className="w-1/2 self-start">
                <p className="font-mono text-[#34d298] self-start w-full justify-start">
                    // olá, me chamo
                </p>
                <h1 className="text-7xl font-bold -tracking-widest mt-10">Juliano
                    <br />
                    <span className="text-[#34d399]">Silveira</span>
                </h1>
                <p className="text-lg mt-5 text-desc">
                    <span className="font-bold text-white">Desenvolvedor FullStack Jr</span>
                    · 1 ano e 3 meses de experiência
                </p>
                <p className="w-full mt-5 -font-primary text-desc pr-20">
                    Sou um desenvolvedor apaixonado por tecnologia, com experiência em
                    desenvolvimento web. Tenho habilidades em JavaScript, React, Node.js
                    e outras tecnologias relacionadas. Estou sempre buscando aprender e me aprimorar
                </p>
                <div className="py-10 flex gap-5">
                    <a href="#Projects" className="inline-block mt-5 px-6 py-3 bg-[#34d399] text-black font-bold rounded-lg hover:bg-[#22c55e] transition-colors duration-300">
                        Ver Projetos
                    </a>
                    <a href="#Contact" className="inline-block mt-5 px-6 py-3 border-2 border-[#34d399] text-white font-bold rounded-lg">
                        Entrar em contato
                    </a>
                </div>
            </div>
            <div className=" w-1/2 flex items-start justify-center">
                <JsonInfo />
            </div>
        </div>

        </>


    )
}