import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/ProjectsPage";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className={`bg-[#221b06] `}>
      <div
        className={`bg-gradient-to-tr from-[#121212] to-[#574202]  w-full   lg:h-screen  `}
      >
        <div className=" flex flex-col mx-auto w-full  ">
          <Spotlight
            className="top-20 left-30 lg:left-[700px] md:-top-20"
            fill="white"
          />
          <Header />
         <HeroSection />
        </div>
      </div>

      <ProjectsPage />

      <div>hello</div>
    </div>
  );
}
