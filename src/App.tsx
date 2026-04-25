import './App.css';
//Components
import CustomCursor from './components/CustomCursor';
import BarNavegation from './components/BarNavegation';

//Pages
import Hero from './pages/hero';
import About from './pages/about';
import Skill from './pages/skill';

const App = () => {
  return (
      <>
        <BarNavegation />
        <CustomCursor />
        <main className="min-h-screen">
          <section className="w-full py-20 space-y-20 h-screen">
            <Hero />
          </section>
          <section className="w-full py-20 space-y-30 ">
            <About />
          </section>
          <section className="w-full py-20 space-y-30 ">
            <Skill />
          </section>
        </main>

      </>

  );
};

export default App;
