import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-teal-500 to-black text-white">
      <Header />
      <Hero />
      {/* <FeaturedProjects /> */}
      <Footer />
    </div>
  );
}
