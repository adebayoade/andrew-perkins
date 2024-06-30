import About from '@/components/ui/about-me';
import GetInTouch from '@/components/ui/get-in-touch';
import Portfolio from '@/components/ui/Portfolio';
import Services from '@/components/ui/services';
import Testimonials from '@/components/ui/testimonials';

export default function Home() {
  return (
    <>
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
