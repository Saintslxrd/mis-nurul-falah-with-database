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


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <section className="bg-green-700 py-12 md:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid />
        </div>  
      </section>

      <WelcomeSection/>
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
