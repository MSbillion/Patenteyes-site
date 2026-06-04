import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Problem } from './components/sections/Problem';
import { Giulia } from './components/sections/Giulia';
import { Community } from './components/sections/Community';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Giulia />
        <Community />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default App;
