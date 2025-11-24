import { Navbar } from "@/components/navbar";
import { GalleryGrid } from "@/components/gallery";
import { WelcomeSection } from "@/components/wellcomeSection";
import { NewsCarousel } from "@/components/newsCarosel";
import { Footer } from "@/components/footer";
import BrosurSlider from "@/components/brosurSlider";
import EkskulSlider from "@/components/ekskulSlider";
import { StudentGrafik } from "@/components/studentGrafik";
import { MapsSection } from "@/components/mapsSection";
import AlumniSection from "@/components/alumniSection";
import { ChatBot } from "@/components/chat-bot";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <WelcomeSection/>
      
      <section className="bg-[#F6FBD9] py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid />
        </div>  
      </section>

      <NewsCarousel/>
      <BrosurSlider/>
      <EkskulSlider/>
      <StudentGrafik/>
      <MapsSection/>
      <AlumniSection/>
      <Footer/>
    </main>
  );
}
