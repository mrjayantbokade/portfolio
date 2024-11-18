import Image from "next/image";
import Link from "next/link";
import {WhiteButton, YellowButton} from "@/components/MyButton";


const Header = () => {
    return (
        <>

            <div className={`flex px-4 py-6 flex flex-row  w-full justify-between`}>

                <Link href={`/`}>
                    <Image className=" drop-shadow-yellow-glow" src="/logonewwhitebraces.webp" alt="logo" width={80}
                           height={20}/>
                </Link>

               

                {/*</div>*/}

                <div className={`flex flex-row gap-6`}>

                    <Link href={`https://www.linkedin.com/in/jayantbokade09/`}>
                        <YellowButton textprop={`in`}/>
                    </Link>
                    <WhiteButton

                        textprop={`github`}/>

                </div>
            </div>
        </>
    );
}
export default Header
