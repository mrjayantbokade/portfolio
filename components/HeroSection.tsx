import { WhiteButton, YellowButton } from "./MyButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className={`mt-36 mx-5 md:px-24 md:py-2 `}>
        <div className={`flex flex-col    `}>
          <h3 className={`text-white font font-semibold text-md  `}>Hi, I'm</h3>
          <h1 className={`text-white  font-bold text-5xl mt-5 `}>
            Jayant Bokade
          </h1>
          <h2 className={`text-white  font-semibold text-3xl mt-1 `}>
            a <span className="text-[#187BE3]"> Full</span>-
            <span className="text-[#E3AB03]">Stack</span> Developer
          </h2>
          <p className={`text-white  font-meduim text-xl mt-6 max-w-xl  `}>
            Building solutions for the web and beyond delivering innovative and
            scalable solutions while exploring new possibilities in technology
          </p>
         
         <Link href={`https://www.linkedin.com/in/jayantbokade09/`}>
         <button className="  text-sm mt-6 py-2 w-fit bg-gradient-to-r from-[#FFE38F] to-[#B28706] text-[#22211F] font-semibold   h-fit  px-4 rounded-2xl ">
            Connect Now +
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
