import Image from "next/image";
import Link from "next/link";
import { WhiteButton, YellowButton } from "@/components/MyButton";

const Header = () => {
  return (
    <>
      <div className={`flex px-4 py-6  flex-row  w-full justify-between mx-auto  max-w-8xl md:px-24 md:py-6 `}>
        <Link href={`/`}>
          <Image
            className=" drop-shadow-yellow-glow"
            src="/logonewwhitebraces.webp"
            alt="logo"
            width={80}
            height={20}
          />
        </Link>

        {/*</div>*/}

        <div className={`flex flex-row `} >
          <Link href={`https://github.com/mrjayantbokade`} className=" w-fit h-fit">
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
