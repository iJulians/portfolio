import ImgProfile from '../../../public/assets/profile.webp';

export default function About() {
  return (
   
      <div id='sobre'>
        

          <h2 className="text-5xl font-bold tracking-tight text-white">
            Sobre mim
          </h2>
  

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-300">
              Sou um desenvolvedor Full Stack Jr apaixonado por criar experiências digitais 
              modernas e funcionais. Com mais de 1 ano de experiência prática, eu me especializo 
              em construir aplicações web completas, do planejamento até a entrega.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Gosto de transformar ideias em código limpo, escalável e com excelente 
              experiência de usuário. Atualmente estou focado em arquiteturas modernas, 
              performance e aplicações impulsionadas por IA.
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

          {/* Imagem com efeitos modernos */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-br from-[#34d298]/20 to-transparent rounded-3xl -rotate-2 group-hover:rotate-1 transition-transform duration-500" />
            
            <div className="relative">
              <img
                src={ImgProfile}
                alt="Juliano Silveira - Desenvolvedor Full Stack"
                className="w-full rounded-2xl shadow-2xl shadow-black/50 
                           transition-all duration-500 group-hover:scale-[1.02] 
                           group-hover:-rotate-1 h-1/5"
              />
              
    
              {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" /> */}
            </div>
          </div>
        </div>
      </div>

  );
}