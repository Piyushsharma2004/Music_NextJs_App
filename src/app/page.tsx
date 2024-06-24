import FeaturesCourses from "@/Components/FeaturesCourses";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructors from "@/Components/Instructors";
import TestimonialCards from "@/Components/TestimonialCards";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return(
  <main className="min-h-screen bg0=-black/[0.96] antialiased bg-grid-white/[0.2]" >
  <HeroSection/>
  <FeaturesCourses />
  <WhyChooseUs />
  <TestimonialCards />
  <UpcomingWebinars/>
  <Instructors/>
  <Footer/>
  </main>
       
  
  );
}
