import './App.css';

import CustomCursor from './components/CustomCursor';
import BarNavegation from './components/BarNavegation';

//Pages
import Hero from './pages/hero';
import About from './pages/about';

const App = () => {
  return (
      <>
        <BarNavegation />
        <CustomCursor />
        <main className="min-h-screen">
          <section className="w-full py-20 space-y-20">
            <Hero />
          </section>
          <section className="w-full py-20 space-y-30 ">
            <About />
          </section>
        </main>

      </>

  );
};

export default App;
