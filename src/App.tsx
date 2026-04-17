import './App.css';

import CustomCursor from './components/CustomCursor';
import BarNavegation from './components/BarNavegation';

import { About } from './pages/about';
const App = () => {
  return (
    <body
      className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-dark-primary to-dark-secondary 
      text-white cursor-none m-10"
  
    >
      <BarNavegation />
      <CustomCursor />
      <section className="w-full py-20 space-y-20">
        <About />
      </section>

    </body>
  );
};

export default App;
