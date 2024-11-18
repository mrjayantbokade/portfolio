import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
      <div className={`bg-black`}>
          <div className={`bg-gradient-to-tr from-[#121212] to-[#E3AB03]/10 w-full h-screen `}>


              <Header/>
              <HeroSection />
          </div>
      </div>
  );
}

