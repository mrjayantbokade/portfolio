import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className={`bg-black`}>
      
      <div className={`bg-gradient-to-tr from-[#121212] to-[#E3AB03]/20  w-full h-[700px]  `}>
        <div className=" flex flex-col mx-auto w-full  ">
          <Header />
          <HeroSection />
          
        </div>
      </div>

      




      
    </div>
  );
}
