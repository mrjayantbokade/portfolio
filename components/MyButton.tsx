
const YellowButton = (  { textprop }: { textprop: string } )    => {
    return (
        <button className="   bg-gradient-to-r from-[#FFE38F] to-[#B28706] text-[#22211F] font-semibold   h-fit py-1 px-4 rounded-2xl ">
            {textprop}
            </button>
    )
}

const WhiteButton = (  { textprop }: { textprop: string } )    => {
    return (
        <button className=" hidden sm:block lg:block  bg-gradient-to-r from-[#FFFFFF]  via-[#E0DCD3] to-[#B3B2AE] text-[#22211F] font-semibold    h-fit py-1 px-4 rounded-2xl ">
            {textprop}
            </button>
    )
}


export  {YellowButton, WhiteButton}