import ethIcon from "../../../assets/icons/eth.svg";
import tetherIcon from "../../../assets/icons/tether.svg";
import CustomBtn from "@/components/Common/CustomBtn";
import githubIcon from "../../../assets/icons/githubIcon.png";
import ethicon from "../../../assets/icons/ethIcon.svg";
import heroBg from "../../../assets/images/Background For Hero.png";
import CustomText from "./CustomText";
import { useNavigate } from "react-router-dom";

/**
 * The Hero component is the main section of the landing page. It contains a title, a description, and a call to action button to login with Github.
 *
 * The component is fully responsive and has a few animations to make it visually appealing.
 *
 * The component also includes a few decorative elements to make the page more visually appealing.
 */
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative ">
      <div className=" mx-auto max-w-7xl max-sm:py-10 px-4 sm:py-24 mb-32">
        <div className="sm:space-y-8 space-y-4 text-center w-full  mx-auto">
          <CustomText
            style={
              "sm:text-4xl text-2xl font-bold leading-tight sm:text-6xl text-[40px]"
            }
            text={"Fueling Ethereum Community with  Open-Source Contribution"}
          />
          <p className="mx-auto max-w-2xl sm:text-lg text-grayBlue max-sm:text-base max-sm:text-center">
            Join our thriving community of developers and contribute to the
            future of Ethereum ecosystem
          </p>
          <div className="flex justify-center max-sm:gap-6 gap-4 items-center  max-sm:flex-col max-sm:py-7 sm:w-[375px] mx-auto ">
            <CustomBtn
              text="Login with GIthub"
              icon={githubIcon}
              colored="yes"
              style={"w-full z-10"}
              onClick={() => {
                navigate("/onboarding");
              }}
            />
            <CustomBtn
              text="Explore Project"
              icon={ethicon}
              style={" w-full z-10"}
              onClick={() => {
                navigate("/projects");
              }}
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 -top-96 left-0 ">
          <img src={heroBg} alt="Hero background" className="" />
        </div>

        <div className="relative md:mb-52 sm:px-4 sm:p-0 sm:mt-3">
          <div className="absolute max-sm:-left-32  left-0 max-sm:-top-20  sm:top-0 -z-50 ">
            <img
              src={tetherIcon}
              alt=""
              className="w-72   animate-float-slow"
            />
          </div>
          <div className="absolute max-sm:-right-32 right-0 max-sm:-top-28 top-0 -z-50 ">
            <img src={ethIcon} alt="" className="  animate-float-slow  w-72 " />
          </div>
        </div>
        {/* <div className="absolute -left-20 top-40">
        <div className="h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        </div> */}
      </div>
    </section>
  );
}
