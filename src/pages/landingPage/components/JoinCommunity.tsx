import CustomBtn from "@/components/CustomBtn";
import diamond from "../../../assets/icons/eth.svg";
import tether from "../../../assets/icons/tether.svg";
import discordIcon from "../../../assets/icons/discordIcon.svg";
import CustomText from "@/components/Specific/landingPage/CustomText";
// import CustomText from "./CustomText";

/**
 * JoinCommunity component.
 *
 * This component renders a section encouraging users to join the community.
 * It includes a title, a brief description, and a call-to-action button
 * that links to the community's Discord server.
 * 
 * The component is styled with decorative background elements and is responsive.
 *
 * @returns {JSX.Element} The component JSX
 */
export default function JoinCommunity() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 max-sm:py-16">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 space-y-8 text-center max-sm:space-y-4">
        <CustomText text="Join the Community" style="text-5xl font-normal max-sm:text-[32px] max-sm:font-medium"/>
        <p className="mx-auto max-w-2xl text-lg text-grayBlue max-sm:text-base max-sm:font-normal max-sm:px-4">
          Connect with developers, contribute to projects, and help build the future of Ethereum
        </p>
        <CustomBtn text="Join Our Discord" icon={discordIcon} style="w-fit py-1 px-2 text-lg mx-auto my-5  max-sm:w-full"/>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-20 max-sm:-left-5 bottom-0 max-sm:bottom-32">
        <img src={tether} alt="" className=" w-80 animate-float-slow -z-50  sm:opacity-100 max-sm:w-[69px]  " />
      </div>
      <div className="absolute -right-20 max-sm:-right-5 -bottom-20 max-sm:bottom-32">
        <img src={diamond} alt="" className=" w-80 animate-float-slow -z-50  sm:opacity-100 max-sm:w-[69px] " />
      </div>
      {/* <div className="absolute bottom-0 left-1/4">
        <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-1/4">
        <div className="h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div> */}
    </section>
  );
}