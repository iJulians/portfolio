import { useState, useEffect } from "react";

import ButtonNavigation from "./ButtonNavigation";

export default function BarNavegation() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigations = [
        { id: 1, name: 'Sobre', href: '#sobre' },
        { id: 2, name: 'Skills', href: '#skills' },
        { id: 3, name: 'Projetos', href: '#projects' },
        { id: 4, name: 'Experiência', href: '#experience' },
        { id: 5, name: 'Contato', href: '#contact', style: 'text-green-400 font-bold border border-green-400 p-2 rounded hover:bg-green-400 hover:text-white' },
    ];

    return (
        <nav
            className={`
            fixed top-0 left-0 w-full z-50 transition-all duration-300 px-10
            ${scrolled
                    ? 'bg-white/5 backdrop-blur-md shadow-md border-white/5'
                    : 'bg-transparent'
                }
        `}
        >
            <div className="w-full mx-auto px-4 py-3 flex justify-between space-x-6">
                <div>
                    <h3 className="text-lg font-bold text-green-400">juliano.dev</h3>
                </div>
                <div>
                    <div className="flex space-x-6 items-center">
                        {navigations.map((nav) => (
                            <ButtonNavigation key={nav.id} navigation={nav} />
                        ))}
                    </div>
                    
                </div>


            </div>
        </nav>

    );
}