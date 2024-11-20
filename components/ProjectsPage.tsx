import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import TagButton from "./TagButton";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import {
  LiveButtonGreen,
  ViewCodeButton,
} from "./MyButton";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#121212]  to-[#574202]  w-full  h-fit text-white pb-32  ">
        <div className="mx-5 lg:px-24   flex flex-col  md:max-w-7xl  md:mx-auto justify-center items-center">
          {/* <div className="flex flex-row gap-1 justify-center items-center">
            <h1 className="text-[#E3AB03] font-bold text-2xl pb-8 mt-1 sm:text-3xl md:text-4xl">
              &#123;
            </h1>
            <h1 className="font-bold text-xl pt-1 pb-8 mt-1 sm:text-3xl md:text-4xl">
              Projects
            </h1>
            <h1 className=" text-[#187BE3]  font-bold text-2xl pb-8 mt-1 sm:text-3xl md:text-4xl">
              &#125;
            </h1>
          </div> */}

          <h1 className="font-semibold text-xl pt-28 pb-8 lg:pb-20  sm:text-xl md:text-2xl">
            Projects
          </h1>

          <div
            className={
              "flex  md:h-[1700px] w-full flex-col gap-10 lg:h-[500px] lg:flex-row justify-center items-center"
            }
          >
           

           
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/go.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Backend`} />
                    <TagButton textprop={`Next.js`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    13 Golang projects
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Responsive Design</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <ViewCodeButton textprop="view code" />
                    <LiveButtonGreen />
                  </div>
                </div>
              </div>
            </MagicCard>
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/nodejs.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Backend`} />
                    <TagButton textprop={`Next.js`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    13 Golang projects
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Responsive Design</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <ViewCodeButton textprop="view code" />
                    <LiveButtonGreen />
                  </div>
                </div>
              </div>
            </MagicCard>
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/react.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Backend`} />
                    <TagButton textprop={`Next.js`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    13 Golang projects
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Responsive Design</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">REST API</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <ViewCodeButton textprop="view code" />
                    <LiveButtonGreen />
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
