import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-24  mx-5 lg:px-24 md:py-2 md:mt-28 flex flex-row  mb-1 md:max-w-8xl  ">
      <div className="flex flex-col  w-fit  ">
        <h3 className="text-white font-semibold text-md md:text-lg">Hi, I am</h3>
        <h1 className="text-white font-bold text-5xl mt-2 sm:text-6xl md:text-8xl">Jayant Bokade</h1>
        <h2 className="text-white font-semibold text-3xl mt-1 sm:text-4xl md:text-5xl">
          a <span className="text-[#187BE3]">Full</span>-
          <span className="text-[#E3AB03]">Stack</span> Developer
        </h2>
        <p className="text-white font-medium text-lg mt-6 max-w-xl sm:text-xl md:mt-4">
          Building solutions for the web and beyond, delivering innovative and
          scalable solutions while exploring new possibilities in technology.
        </p>

        <Link href={"https://www.linkedin.com/in/jayantbokade09/"} className=" w-fit h-fit">
          <div className="text-sm font-semibold mt-6 py-2 cursor-pointer bg-gradient-to-r from-[#FFE38F] to-[#B28706] text-[#22211F] h-fit w-fit px-4 rounded-2xl">
            Connect Now +
          </div>
        </Link>
      </div>

    <div className="hidden md:block lg:block flex-row mx-auto h-full w-fit my-auto   justify-end">
        
      <Image className="hidden xl:block  " src="/heroimagewhitebraces100.webp" alt="logo" width={600} height={20}/>
      {/* <Image className="hidden xl:block  " src="/heroimageredbraces.webp" alt="logo" width={600} height={20}/> */}

    </div>
    </div>
  );
};

export default HeroSection;
