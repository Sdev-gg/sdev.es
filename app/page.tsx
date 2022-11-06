import Hero from '@/components/landing/hero';
import CTA from '@/components/landing/CTA';
import Companies from '@/components/landing/companies';
import FeatureA from '@/components/landing/featureA';
import FeatureB from '@/components/landing/featureB';
import Benefits from '@/components/landing/beneftis';
import Showcase from '@/components/landing/showcase';
import Reviews from '@/components/landing/reviews';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';

export default async function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <FeatureA />
      <FeatureB />
      <Benefits />
      <Showcase />
      <Reviews />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
