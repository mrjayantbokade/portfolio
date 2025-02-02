import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import TagButton from "./TagButton";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { LiveButtonGreen, ViewCodeButton } from "./MyButton";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#121212]  to-[#574202]  w-full  h-fit text-white pb-32  ">
        <div className="mx-5 lg:px-24  flex flex-col  md:max-w-9xl  md:mx-auto justify-center items-center">
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

          <h1 className="font-semibold text-xl pt-28 pb-10 md:pb-32 sm:text-xl md:text-2xl">
            Projects
          </h1>

          <div
            className={
              "flex  md:h-[1700px] w-full flex-col gap-10 pb-10 md:pb-20 lg:pb-32 lg:h-[500px] lg:flex-row justify-center items-center"
            }
          >
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/youtube.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Backend`} />
                    <TagButton textprop={`Advanced`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    Video Sharing Platform
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">JWT Authentication</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Middleware Auth</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Rest API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Scalable Schema</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <Link href={`https://github.com/mrjayantbokade/youtube-backend`}>
                    <ViewCodeButton textprop="view code" />
                    </Link>
                  </div>
                </div>
              </div>
            </MagicCard>
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/ebook.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Backend`} />
                    <TagButton textprop={`Typescript`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    Online E-book Platform
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">
                        JWT Authentication and Access Token
                      </p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Cloudinary</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Rest API</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Typesaftey Included</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <Link href={`https://github.com/mrjayantbokade/ebook`}>
                    <ViewCodeButton textprop="view code" />
                    </Link>
                  </div>
                </div>
              </div>
            </MagicCard>
            
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/portfolio.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Portfolio`} />
                    <TagButton textprop={`Portfolio`} />
                    <TagButton textprop={`Next.js`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    Developer Portfolio
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Accernity UI, MagicUI</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Single Page Application</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Reusable Components </p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Creative Narration</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <Link href={`https://github.com/mrjayantbokade/portfolio`}>
                      <ViewCodeButton textprop="view code" />
                    </Link>
                    <Link href={`/`}>
                      <LiveButtonGreen />
                    </Link>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>

          <div className="flex  w-full justify-center items-center">
            <div className="text-transparent">hello</div>
            <Link href={`/projects`}>
            <button className="   bg-[#D69E2E]/15 text-[14px] font-medium  text-yellow-200  border border-yellow-200/15  h-fit py-1 px-3 rounded-md ">
              view more
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
