import ImgProfile from '../../../public/assets/profile.webp';

export default function About() {
    return (

        <div id='sobre'>
            <h2 className="text-5xl font-bold tracking-tight text-[#34d298] mb-10">
                Sobre mim
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                    <p className="text-lg leading-relaxed text-desc">
                        Minha paixão por códigos começou quando conheci o VBA em meados de 2020, automatizar tarefas no excel, criar relatórios e dashboards me fascinou.
                    </p>

                    <p className="text-lg leading-relaxed text-desc">
                        Por volta de 2021, surgiu a necessidade de aprender sobre Power BI para auxiliar nas análises de dados, e foi aí que me aprofundei em SQL para extrair informações valiosas dos bancos de dados. Com o tempo, percebi que queria ir além da análise e comecei a explorar o desenvolvimento de software.
                    </p>

                    <p className="text-lg leading-relaxed text-desc">
                        Em 2024, depois de um período de estudo intenso, consegui meu primeiro emprego como desenvolvedor full stack, 
                        onde pude aplicar meus conhecimentos em <span className="text-[#34d298] font-semibold">projetos reais</span> e continuar aprendendo cada vez mais sobre o mundo do desenvolvimento de software.
                        Agora com mais de <span className="text-[#34d298] font-semibold">1 ano de experiência</span>, estou sempre em busca de novos desafios e 
                        oportunidades para crescer profissionalmente e contribuir com projetos inovadores.
                    </p>



                    {/* Destaques / Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-semibold text-[#34d298]">1.3</p>
                            <p className="text-sm text-gray-400">anos de exp.</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-[#34d298]">15+</p>
                            <p className="text-sm text-gray-400">projetos</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-[#34d298]">∞</p>
                            <p className="text-sm text-gray-400">aprendendo</p>
                        </div>
                    </div>
                </div>

                {/* Imagem centralizada */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative group max-w-95 w-full">

                        {/* Glow decorativo */}
                        <div className="absolute -inset-6 bg-linear-to-br from-[#34d298]/10 to-transparent rounded-3xl -rotate-2 group-hover:rotate-1 transition-all duration-700" />

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/60">
                            <div className="aspect-3/5 w-full">   {/* Ajuste o aspect se precisar */}
                                <img
                                    src={ImgProfile}
                                    alt="Juliano Silveira - Desenvolvedor Full Stack"
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}