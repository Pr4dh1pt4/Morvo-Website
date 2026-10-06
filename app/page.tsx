import Hero from '@/components/Hero';
import Perks from '@/components/Perks';
import Steps from '@/components/Steps';
import ProblemSolution from '@/components/ProblemSolution';
import Products from '@/components/Products';
import Impact from '@/components/Impact';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Perks />
        <Steps />
        <ProblemSolution />
        <Products />
        <Impact />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
