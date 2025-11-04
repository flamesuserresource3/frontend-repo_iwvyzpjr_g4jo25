import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
