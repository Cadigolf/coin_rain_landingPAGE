import Airdrop from "./components/airdrop/airdrop";
import ContactUs from "./components/contact-us/contact-us";
import Gallery from "./components/gallery/gallery";
import Hero from "./components/hero/hero";
import HowItWorks from "./components/how-it-works/how-it-works";
import KioskSection from "./components/kiosk/kiosk-section";
import Rewards from "./components/rewards/rewards";
import Slideshow from "./components/slideshow";
import VideoSection from "./components/video-section";

export default function Home() {
  return (
    <main>
      <section id="hero" className="scroll-mt-[100vh]">
        <Hero />
      </section>

      <section id="slideshow">
        <Slideshow />
      </section>

      <section id="video">
        <VideoSection />
      </section>

      <section id="kiosk">
        <KioskSection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="rewards" className="scroll-mt-20 sm:scroll-mt-20">
        <Rewards />
      </section>

      <section id="how-it-works" className="scroll-mt-20 sm:scroll-mt-20">
        <HowItWorks />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <section id="airdrop" className="scroll-mt-20 sm:-scroll-mt-40">
        <Airdrop />
      </section>
    </main>
  );
}
