import { MagicCard } from "./ui/magic-card";
import Image from "next/image";
import TagButton from "./TagButton";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { LiveButtonGreen, ViewCodeButton } from "./MyButton";
import Link from "next/link";

const AllProjects = () => {
  return (
    <>
      <div
        id="no-scroll-bar"
        className="bg-gradient-to-br from-[#121212]  to-[#574202]  w-full  text-white h-screen overflow-y-scroll "
      >
        <div className="mx-5 lg:px-24  flex flex-col  md:max-w-9xl  md:mx-auto justify-center items-center">
          <div
            className={
              "flex  w-full flex-col gap-10 mb-12 mt-12 md:pb-20 lg:pb-2  lg:flex-row justify-center items-center"
            }
          >
            <MagicCard className="  max-w-sm  h-[550px] w-[350px] shadow-md">
              <div className="bg-white h-2/6 w-full">
                <Image
                  className=" "
                  src="/employeemanagement.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`Full-Stack`} />
                    <TagButton textprop={`React`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    Employee Management
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

                      <p className="text-sm">Used local-storage</p>
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
                    <Link
                      href={`https://github.com/mrjayantbokade/Employe-Management-Full-Stack`}
                    >
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
                  src="/landingpage.png"
                  alt="logo"
                  width={600}
                  height={20}
                />
                <div className="px-6 py-6">
                  <div className=" flex flex-row gap-2">
                    <TagButton textprop={`MagicUI`} />
                    <TagButton textprop={`React`} />
                    <TagButton textprop={`Intermediate`} />
                  </div>
                  <h1 className="text-[##FBBF24] font-semibold text-2xl py-3">
                    Landing Page Design
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

                      <p className="text-sm">Reusable components</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Creative Touch</p>
                    </div>
                    <div className="flex flex-row gap-2  ">
                      <Icon
                        path={mdiCheckCircleOutline}
                        size={0.8}
                        className="text-green-600"
                      />

                      <p className="text-sm">Website Redesign</p>
                    </div>
                  </div>
                  <div className="pt-16 flex flex-row gap-2">
                    <Link href={`https://github.com/mrjayantbokade/ByteUprise`}>
                      <ViewCodeButton textprop="view code" />
                    </Link>
                    <Link href={`https://byte-uprise.vercel.app/`}>
                      <LiveButtonGreen />
                    </Link>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
          <div
            className={
              "flex  w-full flex-col gap-10 mb-6 mt-2 md:pb-20 lg:pb-2  lg:flex-row justify-center items-center"
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
        </div>
        <div className="flex  flex-row justify-center items-center mb-10">
          <Link href={`https://github.com/mrjayantbokade`}>
            <button className="   bg-[#D69E2E]/15 text-[14px] font-medium  text-yellow-200  border border-yellow-200/15  h-fit py-1 px-3 rounded-md ">
              view all
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
