import Icon from '@mdi/react';

import { mdiRecordCircleOutline } from "@mdi/js";

const YellowButton = ({ textprop }: { textprop: string }) => {
  return (
    <button className="   bg-gradient-to-r  text-sm from-[#FFE38F] to-[#B28706] text-[#22211F] font-semibold   h-fit py-2 px-4 rounded-full ">
      {textprop}
    </button>
  );
};

const WhiteButton = ({ textprop }: { textprop: string }) => {
  return (
    <button className=" ml-2 hidden sm:block lg:block  text-sm bg-gradient-to-r from-[#FFFFFF]  via-[#E0DCD3] to-[#B3B2AE] text-[#22211F] font-semibold    h-fit py-2 px-4 rounded-full ">
      {textprop}
    </button>
  );
};
const LiveButton = () => {
  return (
    <button className=" flex flex-row gap-[2px] bg-transparent border border-lime-500 text-lime-500 font-semibold    h-fit py-2 px-4 rounded-full ">
      <span>live</span>
      <Icon className='mt-[4px]' path={mdiRecordCircleOutline} size={0.67} />

    </button>
  );
};
const LiveButtonGreen = () => {
  return (
    <button className=" flex flex-row gap-[2px] shadow-md hover:scale-105 hover:shadow-lg transition-transform bg-transparent border border-green-600 text-green-600 font-semibold    h-fit py-2 px-4 rounded-full ">
      <span>live</span>
      <Icon className='mt-[4px]' path={mdiRecordCircleOutline} size={0.67} />

    </button>
  );
};
const LiveButtonRed = () => {
  return (
    <button className=" flex flex-row gap-[2px] bg-transparent border border-red-500 text-red-500 font-semibold    h-fit py-2 px-4 rounded-full ">
      <span>live</span>
      <Icon className='mt-[4px]' path={mdiRecordCircleOutline} size={0.67} />

    </button>
  );
};

const ViewCodeButton = ({ textprop }: { textprop: string }) => {
  return (
    <>
      <button className=" font-semibold px-4 py-2 border border-yellow-400 text-yellow-400  rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform">
        {textprop}
      </button>
    </>
  );
};
const ViewCodeButtonWhite = ({ textprop }: { textprop: string }) => {
  return (
    <>
      <button className=" font-semibold px-4 py-2 border border-white text-white  rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform">
        {textprop}
      </button>
    </>
  );
};

export { YellowButton, WhiteButton, ViewCodeButton, LiveButton, ViewCodeButtonWhite, LiveButtonGreen, LiveButtonRed};
