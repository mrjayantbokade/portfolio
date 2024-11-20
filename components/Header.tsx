import Image from "next/image";
import Link from "next/link";
import { WhiteButton, YellowButton } from "@/components/MyButton";

const Header = () => {
  return (
    <>
      <div className={`flex px-4 py-6  flex-row  w-full justify-between mx-auto   lg:px-24 `}>

        <Link href={`/`}>

          <Image
            className=" drop-shadow-yellow-glow"
            src="/logonewwhitebraces.webp"
            alt="logo"
            width={100}
            height={40}
          />
          
        </Link>

        <div className={`flex flex-row `} >
          <Link href={`https://www.linkedin.com/in/jayantbokade09/`} className=" w-fit h-fit">
            <YellowButton textprop={`in`} />
          </Link>

          <Link href={`https://github.com/mrjayantbokade`} className=" w-fit h-fit">
            <WhiteButton textprop={`github`} />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
