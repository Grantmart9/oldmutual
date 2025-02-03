"use client";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, Typography, createTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliderStyle.css";
const montserrat = Montserrat({ subsets: ["latin"] });
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="CustomTabPanel"
      hidden={value !== index}
      id={`simple-CustomTabPanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function CustomTabLabel({ text, step }) {
  return (
    <>
      <div
        className={`${montserrat.className} w-[170px] max-w-full items-start self-start text-left`}
      >
        <p className="text-xl font-bold text-brandPinkAlt">{step}</p>
        <p className="text-base normal-case text-textGreyAlt">{text}</p>
      </div>
    </>
  );
}
export default function Home() {
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const [scroll, setScroll] = useState("paper");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecond = () => setOpenSecond(true);
  const handleCloseSecond = () => setOpenSecond(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let callButtonUrl = "https://www.oldmutual.co.za/education-call-me-back/";

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute right-0 z-0 h-full w-1/2 bg-[#f5f5f5]"></div>
        <header className="relative z-10 mx-auto mb-20 flex w-full max-w-[1300px] flex-col items-center bg-white bg-contain bg-right-top bg-no-repeat pt-24 md:h-[725px] md:flex-row md:bg-[url('/landing-grey.png')]">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center md:flex-row">
            <Image
              src="/landing-mobile.png"
              width={376}
              height={300}
              alt="Speak to us header"
              className="float-right self-end pb-12 pl-5 md:hidden"
            />
            <div className="mx-auto w-[670px] max-w-full px-5 text-center md:-mr-10 md:pt-[80px] md:text-right">
              <h2 className="text-5xl font-light text-textGreyAlt">
                <span className="font-bold">BIG DREAMS </span>
                <br />
                DESERVE A LITTLE HELP
              </h2>
              <p className="float-right w-[420px] max-w-full text-2xl font-light">
                5 steps to the education plan that can make it happen
              </p>
              <div className="clear-both flex flex-col justify-end pt-9 md:flex-row">
                <a
                  className="group mb-5 block cursor-pointer rounded-full border border-primaryGreen px-11 py-4 text-center text-base font-light text-primaryGreen md:mb-0"
                  href="#steps"
                >
                  5 STEPS{" "}
                  <img
                    className="inline-block pl-1 group-hover:animate-bounce"
                    src="./arrow-down-green.svg"
                    alt="Down Arrow"
                  />
                </a>
                <a
                  className="group mb-3 block cursor-pointer rounded-full bg-gradient-to-r from-secondaryGreen to-primaryGreen  px-11 py-4 text-center text-base font-light text-white md:mb-0 md:ml-3"
                  href="#calcs"
                >
                  CALCULATORS{" "}
                  <img
                    className="inline-block pl-1 group-hover:animate-bounce"
                    src="./arrow-down-white.svg"
                    alt="Down Arrow"
                  />
                </a>
              </div>
            </div>
            <div className="relative w-1/2">
              <Image
                src="/landing-header-boy.png"
                alt="Header Image"
                width={600}
                height={100}
                className="hidden md:block"
              />
              <Link
                href="https://www.oldmutual.co.za/education-call-me-back/"
                target="_blank"
              >
                <Image
                  src="/call-button.png"
                  alt="Call button"
                  width={112}
                  height={112}
                  className="absolute left-[10%] top-[70%] hidden md:block"
                />
              </Link>
            </div>
          </div>
        </header>
      </div>
      <main>
        <div className="bg-white px-5">
          <section className="m-auto flex w-full max-w-[1060px] flex-col py-24 md:flex-row">
            <h1 className="w-[350px] max-w-full flex-shrink-0 text-4xl font-light text-textGreyAlt">
              A good education is the key to unlock their{" "}
              <span className="font-bold">big dreams</span>.
            </h1>
            <div className="flex-shrink pt-10 md:pl-20 md:pt-0">
              <p className="pb-5">
                Making sure that your child has a solid education to secure
                their future is probably one of the most important roles you
                have as a parent. A good education is the key to unlock their
                big dreams – ensuring better job opportunities, higher income
                and an overall better quality of life.{" "}
              </p>
              <p>
                It might sound overwhelming, but you can proactively plan and
                prepare for their future education in just five steps. We
                provide all the tools you need.{" "}
              </p>
            </div>
          </section>
          <section
            id="steps"
            className="mx-auto my-20 w-full max-w-[1160px] px-0"
          >
            <div className="justify-between rounded-[55px] bg-bodyBackground px-3 py-12 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)] md:hidden md:px-11 md:py-16">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#009677",
                  "--swiper-pagination-color": "#009677",
                }}
                autoHeight={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper p-10"
              >
                <SwiperSlide className="flex flex-col content-center justify-center px-5 py-0">
                  <div
                    className={`${montserrat.className} w-full  max-w-full items-start self-start px-7 text-left`}
                  >
                    <p className="text-xl font-bold text-brandPinkAlt">
                      STEP 1
                    </p>
                    <p className="text-base normal-case text-textGreyAlt">
                      Work out the cost of education
                    </p>
                    <div className="mt-5 h-[3px] bg-hoverGradientBluePink"></div>
                  </div>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-cost-of-edu.svg"
                        width={135}
                        height={109}
                        alt="Cost of Education"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Work out the cost of education
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Our{" "}
                        <Link
                          href="/cost-of-education"
                          className="text-primaryGreen"
                        >
                          Cost of Education calculator
                        </Link>{" "}
                        will help you work out the cost of your child's
                        pre-primary, primary, secondary and tertiary education.
                        The calculator will produce a comprehensive report that
                        you can download to review, or share with your financial
                        adviser.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col content-center justify-center px-5 py-0">
                  <div
                    className={`${montserrat.className} w-full  max-w-full items-start self-start px-7 text-left`}
                  >
                    <p className="text-xl font-bold text-brandPinkAlt">
                      STEP 2
                    </p>
                    <p className="text-base normal-case text-textGreyAlt">
                      How much to save every month
                    </p>
                    <div className="mt-5 h-[3px] bg-hoverGradientBluePink"></div>
                  </div>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-howmuch.svg"
                        width={135}
                        height={109}
                        alt="How much yo save"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        How much to save every month
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Once you have a clear view of the education costs, use
                        our{" "}
                        <Link
                          href="/how-much-to-save"
                          className="text-primaryGreen"
                        >
                          How Much To Save Calculator
                        </Link>{" "}
                        to work out the monthly amount needed to reach your
                        savings goal.
                      </p>
                      <p className="font-light text-textGreyAlt">
                        The{" "}
                        <Link
                          href="/loans-vs-savings"
                          className="text-primaryGreen"
                        >
                          Savings vs Loans Calculator
                        </Link>{" "}
                        will show you how much you can save by starting to save
                        early versus how much more it could cost you if you have
                        no savings and need to take out a loan. It really pays
                        to start saving as soon as possible.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col content-center justify-center px-5 py-0">
                  <div
                    className={`${montserrat.className} w-full max-w-full items-start self-start px-7 text-left`}
                  >
                    <p className="text-xl font-bold text-brandPinkAlt">
                      STEP 3
                    </p>
                    <p className="text-base normal-case text-textGreyAlt">
                      Find the money
                    </p>
                    <div className="mt-5 h-[3px] bg-hoverGradientBluePink"></div>
                  </div>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-pyf.svg"
                        width={135}
                        height={109}
                        alt="Find the money"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Find the money
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Making small adjustments to your monthly budget will
                        save you from making big sacrifices when it's time to
                        pay for education. Our{" "}
                        <Link
                          href="/pay-yourself-first"
                          className="text-primaryGreen"
                        >
                          Pay Yourself First Calculator
                        </Link>{" "}
                        can help you find the money in your budget that can go
                        towards education savings. It also gives you practical
                        savings tips and the amounts you can save by making some
                        small changes in your daily life.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col content-center justify-center px-5 py-0">
                  <div
                    className={`${montserrat.className} w-full max-w-full items-start self-start px-7 text-left`}
                  >
                    <p className="text-xl font-bold text-brandPinkAlt">
                      STEP 4
                    </p>
                    <p className="text-base normal-case text-textGreyAlt">
                      Get the right advice
                    </p>
                    <div className="mt-5 h-[3px] bg-hoverGradientBluePink"></div>
                  </div>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-advice.svg"
                        width={135}
                        height={134}
                        alt="Get the right advice"
                        className="flex-shrink-0 flex-grow-0"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Get the right advice
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Contact your adviser or call{" "}
                        <span className="font-bold">0860 66 66 59</span> and
                        we'll connect you to an adviser. Your adviser will guide
                        you in selecting the{" "}
                        <span className="font-bold">
                          most suitable solution
                        </span>
                        , taking into account your affordability, flexibility,
                        tax, and risk profile. We'll also make sure that you
                        have the appropriate{" "}
                        <span className="font-bold">
                          life and disability cover
                        </span>{" "}
                        to protect your child's education savings. We offer a
                        10% discount on life and disability cover – ask your
                        adviser.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col content-center justify-center px-5 py-0">
                  <div
                    className={`${montserrat.className} w-full max-w-full items-start self-start px-7 text-left`}
                  >
                    <p className="text-xl font-bold text-brandPinkAlt">
                      STEP 5
                    </p>
                    <p className="text-base normal-case text-textGreyAlt">
                      Get rewarded
                    </p>
                    <div className="mt-5 h-[3px] bg-hoverGradientBluePink"></div>
                  </div>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-save-v-loan.svg"
                        width={60}
                        height={138}
                        alt="Get rewarded"
                        className="mx-auto"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Get rewarded
                      </p>
                      <p className="font-light text-textGreyAlt">
                        You can get rewarded for saving for your child's
                        education, having the right life and disability cover
                        and taking control of your finances. Make sure you are
                        signed up. As an{" "}
                        <Link
                          href="http://oldmutual.co.za/rewards"
                          className="text-primaryGreen"
                        >
                          Old Mutual Rewards
                        </Link>{" "}
                        member, you can earn points, depending on your tier
                        status. By using one of our savings solutions for your
                        child's education and having the right life and
                        disability cover, you will move two tiers higher and
                        earn even more rewards.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="hidden justify-between rounded-[55px] bg-bodyBackground px-5 py-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)] md:block md:px-11 md:py-12">
              <ThemeProvider theme={theme}>
                <div className="relative left-1/2 w-[91%] -translate-x-1/2">
                  <div className="absolute bottom-0 h-[4px] w-full bg-[#E4E4E4]"></div>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                      style: {
                        backgroundImage:
                          "linear-gradient(160deg, rgba(54,136,231,1) 0%, rgba(233,21,130,1) 100%)",
                        justifyContent: "space-between",
                        height: "3px",
                      },
                    }}
                    variant="fullWidth"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    style={{
                      justifyContent: "space-between",
                    }}
                    sx={{ justifyContent: "space-between" }}
                  >
                    {/* <TabList className="grid w-fit grid-cols-2 items-stretch gap-5 sm:grid-cols-5 sm:gap-0 sm:border-b-[5px] sm:border-[#e4e4e4]"> */}

                    <Tab
                      label={
                        <CustomTabLabel
                          step="STEP 1"
                          text="Work out the cost of education"
                        />
                      }
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Tab
                      label={
                        <CustomTabLabel
                          step="STEP 2"
                          text="How much to save every month"
                        />
                      }
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Tab
                      label={
                        <CustomTabLabel step="STEP 3" text="Find the money" />
                      }
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Tab
                      label={
                        <CustomTabLabel
                          step="STEP 4"
                          text="Get the right advice"
                        />
                      }
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Tab
                      label={
                        <CustomTabLabel step="STEP 5" text="Get rewarded" />
                      }
                      style={{ justifyContent: "flex-start" }}
                    />
                    {/* </TabList> */}
                  </Tabs>
                </div>
              </ThemeProvider>
              <div>
                <CustomTabPanel value={value} index={0}>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-cost-of-edu.svg"
                        width={135}
                        height={109}
                        alt="Cost of Education"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Work out the cost of education
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Our{" "}
                        <Link
                          href="/cost-of-education"
                          className="text-primaryGreen"
                        >
                          Cost of Education calculator
                        </Link>{" "}
                        will help you work out the cost of your child's
                        pre-primary, primary, secondary and tertiary education.
                        The calculator will produce a comprehensive report that
                        you can download to review, or share with your financial
                        adviser.
                      </p>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-howmuch.svg"
                        width={135}
                        height={109}
                        alt="How much yo save"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        How much to save every month
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Once you have a clear view of the education costs, use
                        our{" "}
                        <Link
                          href="/how-much-to-save"
                          className="text-primaryGreen"
                        >
                          How Much To Save Calculator
                        </Link>{" "}
                        to work out the monthly amount needed to reach your
                        savings goal.
                      </p>
                      <p className="font-light text-textGreyAlt">
                        The{" "}
                        <Link
                          href="/loans-vs-savings"
                          className="text-primaryGreen"
                        >
                          Savings vs Loans Calculator
                        </Link>{" "}
                        will show you how much you can save by starting to save
                        early versus how much more it could cost you if you have
                        no savings and need to take out a loan. It really pays
                        to start saving as soon as possible.
                      </p>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-pyf.svg"
                        width={135}
                        height={109}
                        alt="Find the money"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Find the money
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Making small adjustments to your monthly budget will
                        save you from making big sacrifices when it's time to
                        pay for education. Our{" "}
                        <Link
                          href="/pay-yourself-first"
                          className="text-primaryGreen"
                        >
                          Pay Yourself First Calculator
                        </Link>{" "}
                        can help you find the money in your budget that can go
                        towards education savings. It also gives you practical
                        savings tips and the amounts you can save by making some
                        small changes in your daily life.
                      </p>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-advice.svg"
                        width={135}
                        height={134}
                        alt="Get the right advice"
                        className="flex-shrink-0 flex-grow-0"
                      />
                    </div>
                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Get the right advice
                      </p>
                      <p className="font-light text-textGreyAlt">
                        Contact your adviser or call{" "}
                        <span className="font-bold">0860 66 66 59</span> and
                        we'll connect you to an adviser. Your adviser will guide
                        you in selecting the{" "}
                        <span className="font-bold">
                          most suitable solution
                        </span>
                        , taking into account your affordability, flexibility,
                        tax, and risk profile. We'll also make sure that you
                        have the appropriate{" "}
                        <span className="font-bold">
                          life and disability cover
                        </span>{" "}
                        to protect your child's education savings. We offer a
                        10% discount on life and disability cover – ask your
                        adviser.
                      </p>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <div className="mx-auto mt-12 flex w-full max-w-[850px] flex-col items-start gap-10 md:gap-24 sm:flex-row">
                    <div className="self-center md:w-[10%] md:flex-shrink-0 md:flex-grow-0 md:self-start">
                      <Image
                        src="./icon-landing-save-v-loan.svg"
                        width={60}
                        height={138}
                        alt="Get rewarded"
                        className="mx-auto"
                      />
                    </div>

                    <div className="md:w-[90%] md:flex-shrink">
                      <p className="pb-6 text-2xl font-bold text-textGreyAlt">
                        Get rewarded
                      </p>
                      <p className="font-light text-textGreyAlt">
                        You can get rewarded for saving for your child's
                        education, having the right life and disability cover
                        and taking control of your finances. Make sure you are
                        signed up. As an{" "}
                        <Link
                          href="http://oldmutual.co.za/rewards"
                          className="text-primaryGreen"
                        >
                          Old Mutual Rewards
                        </Link>{" "}
                        member, you can earn points, depending on your tier
                        status. By using one of our savings solutions for your
                        child's education and having the right life and
                        disability cover, you will move two tiers higher and
                        earn even more rewards.
                      </p>
                    </div>
                  </div>
                </CustomTabPanel>
              </div>
            </div>
          </section>
          <section id="calcs">
            <h3 className="mx-auto max-w-[500px] pt-20 text-center text-4xl font-light text-textGreyAlt">
              <span className="font-bold">Use the calculators</span> below to
              put your plan into action.
            </h3>
            <p className="mx-auto max-w-[500px] pb-32 pt-6 text-center text-base font-light text-textGreyAlt">
              Knowing how much to save and what your options are is the first
              step to giving your child the best start in life.{" "}
            </p>
          </section>
          <section className="m-full mx-auto grid max-w-[1160px] grid-cols-1 gap-8 text-textGreyAlt md:grid-cols-2 md:gap-20">
            <Link
              href={"/cost-of-education"}
              className="group flex flex-col items-start gap-5 rounded-[35px] p-8 text-center transition-all duration-300 hover:bg-hoverGradientGreen hover:shadow-lg hover:transition-all hover:duration-300 md:flex-row md:gap-14 md:text-left"
            >
              <div className="mb-10 flex w-full flex-shrink-0 flex-grow-0 basis-24 items-center justify-center">
                <Image
                  src="./icon-landing-cost-of-edu.svg"
                  width={143}
                  height={115}
                  alt="Cost of Education"
                  className="transition-opacity duration-100 group-hover:w-0 group-hover:opacity-0"
                />
                <Image
                  src="./icon-landing-cost-of-edu-white.svg"
                  width={143}
                  height={115}
                  alt="Cost of Education"
                  className="w-0 opacity-0 transition-opacity duration-100 group-hover:w-[143px] group-hover:opacity-100"
                />
              </div>
              <div className="group-hover:text-white">
                <p className="text-xl font-light uppercase group-hover:text-white">
                  <span className="font-bold">The cost of education</span>
                  <br />
                  calculator
                </p>
                <p className="pt-7 font-light group-hover:text-white">
                  Get a good idea of what their education could cost you.
                </p>
                <button
                  href={"/cost-of-education"}
                  className="mt-14 inline-block cursor-pointer rounded-full border border-textGreyAlt px-7 py-4 text-center text-sm font-light text-textGreyAlt group-hover:border-transparent group-hover:bg-[#1A3967] group-hover:bg-opacity-60 group-hover:text-white"
                >
                  VIEW CALCULATOR{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.287"
                    height="13.238"
                    viewBox="0 0 17.287 13.238"
                    className="relative ml-1 inline-block fill-[#282828] group-hover:-right-1 group-hover:fill-[#ffffff]"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(0 13.238) rotate(-90)"
                    >
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M21.733,20.986a.908.908,0,0,0-1.28,0l-4.212,4.14V11.908a.908.908,0,1,0-1.816,0V25.1l-4.113-4.113a.908.908,0,0,0-1.289,1.28l5.783,5.783a.817.817,0,0,0,1.153,0l5.774-5.783a.908.908,0,0,0,0-1.28Z"
                        transform="translate(-8.759 -11)"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              href={"/how-much-to-save"}
              className="group flex flex-col items-start gap-5 rounded-[35px] p-8 text-center transition-all duration-300 hover:bg-hoverGradientGreen hover:shadow-lg hover:transition-all hover:duration-300 md:flex-row md:gap-14 md:text-left"
            >
              <div className="mb-10 flex w-full flex-shrink-0 flex-grow-0 basis-24 items-center justify-center">
                <Image
                  src="./icon-landing-howmuch.svg"
                  width={90}
                  height={119}
                  alt="Howmuch To Save"
                  className="transition-opacity duration-100 group-hover:w-0 group-hover:opacity-0"
                />
                <Image
                  src="./icon-landing-howmuch-white.svg"
                  width={90}
                  height={119}
                  alt="Howmuch To Save"
                  className="w-0 opacity-0 transition-opacity duration-100 group-hover:w-[90px] group-hover:opacity-100"
                />
              </div>
              <div className="group-hover:text-white">
                <p className="text-xl font-light uppercase group-hover:text-white">
                  <span className="font-bold">HOW MUCH TO SAVE</span>
                  <br />
                  calculator
                </p>
                <p className="pt-7 font-light group-hover:text-white">
                  Work out how much to save every month to get you to your
                  education savings goal.
                </p>
                <button
                  href={"/cost-of-education"}
                  className="mt-14 inline-block cursor-pointer rounded-full border border-textGreyAlt px-7 py-4 text-center text-sm font-light text-textGreyAlt group-hover:border-transparent group-hover:bg-[#1A3967] group-hover:bg-opacity-60 group-hover:text-white"
                >
                  VIEW CALCULATOR{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.287"
                    height="13.238"
                    viewBox="0 0 17.287 13.238"
                    className="relative ml-1 inline-block fill-[#282828] group-hover:-right-1 group-hover:fill-[#ffffff]"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(0 13.238) rotate(-90)"
                    >
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M21.733,20.986a.908.908,0,0,0-1.28,0l-4.212,4.14V11.908a.908.908,0,1,0-1.816,0V25.1l-4.113-4.113a.908.908,0,0,0-1.289,1.28l5.783,5.783a.817.817,0,0,0,1.153,0l5.774-5.783a.908.908,0,0,0,0-1.28Z"
                        transform="translate(-8.759 -11)"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              href={"/loans-vs-savings"}
              className="group flex flex-col items-start gap-5 rounded-[35px] p-8 text-center transition-all duration-300 hover:bg-hoverGradientGreen hover:shadow-lg hover:transition-all hover:duration-300 md:flex-row md:gap-14 md:text-left"
            >
              <div className="mb-10 flex w-full flex-shrink-0 flex-grow-0 basis-24 items-center justify-center">
                <Image
                  src="./icon-landing-save-v-loan.svg"
                  width={70}
                  height={138}
                  alt="Saving vs Loans"
                  className="transition-opacity duration-100 group-hover:w-0 group-hover:opacity-0"
                />
                <Image
                  src="./icon-landing-save-v-loan-white.svg"
                  width={70}
                  height={138}
                  alt="Saving vs Loans"
                  className="w-0 opacity-0 transition-opacity duration-100 group-hover:w-[70px] group-hover:opacity-100"
                />
              </div>
              <div className="group-hover:text-white">
                <p className="text-xl font-light uppercase group-hover:text-white">
                  <span className="font-bold">SAVINGS VS LOANS</span>
                  <br />
                  calculator
                </p>
                <p className="pt-7 font-light group-hover:text-white">
                  See what you can save by starting to save for their education
                  as soon as possible.
                </p>
                <button
                  href={"/cost-of-education"}
                  className="mt-14 inline-block cursor-pointer rounded-full border border-textGreyAlt px-7 py-4 text-center text-sm font-light text-textGreyAlt group-hover:border-transparent group-hover:bg-[#1A3967] group-hover:bg-opacity-60 group-hover:text-white"
                >
                  VIEW CALCULATOR{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.287"
                    height="13.238"
                    viewBox="0 0 17.287 13.238"
                    className="relative ml-1 inline-block fill-[#282828] group-hover:-right-1 group-hover:fill-[#ffffff]"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(0 13.238) rotate(-90)"
                    >
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M21.733,20.986a.908.908,0,0,0-1.28,0l-4.212,4.14V11.908a.908.908,0,1,0-1.816,0V25.1l-4.113-4.113a.908.908,0,0,0-1.289,1.28l5.783,5.783a.817.817,0,0,0,1.153,0l5.774-5.783a.908.908,0,0,0,0-1.28Z"
                        transform="translate(-8.759 -11)"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              href={"/pay-yourself-first"}
              className="group flex flex-col items-start gap-5 rounded-[35px] p-8 text-center transition-all duration-300 hover:bg-hoverGradientGreen hover:shadow-lg hover:transition-all hover:duration-300 md:flex-row md:gap-14 md:text-left"
            >
              <div className="mb-10 flex w-full flex-shrink-0 flex-grow-0 basis-24 items-center justify-center">
                <Image
                  src="./icon-landing-pyf.svg"
                  width={118}
                  height={111}
                  alt="Pay Yourself First"
                  className="transition-opacity duration-100 group-hover:w-0 group-hover:opacity-0"
                />
                <Image
                  src="./icon-landing-pyf-white.svg"
                  width={118}
                  height={111}
                  alt="Pay Yourself First"
                  className="w-0 opacity-0 transition-opacity duration-100 group-hover:w-[118px] group-hover:opacity-100"
                />
              </div>
              <div className="group-hover:text-white">
                <p className="text-xl font-light uppercase group-hover:text-white">
                  <span className="font-bold">PAY YOURSELF FIRST</span>
                  <br />
                  calculator
                </p>
                <p className="pt-7 font-light group-hover:text-white">
                  See how small actions today can make a massive difference to
                  your child's education.
                </p>
                <button
                  href={"/cost-of-education"}
                  className="mt-14 inline-block cursor-pointer rounded-full border border-textGreyAlt px-7 py-4 text-center text-sm font-light text-textGreyAlt group-hover:border-transparent group-hover:bg-[#1A3967] group-hover:bg-opacity-60 group-hover:text-white"
                >
                  VIEW CALCULATOR{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.287"
                    height="13.238"
                    viewBox="0 0 17.287 13.238"
                    className="relative ml-1 inline-block fill-[#282828] group-hover:-right-1 group-hover:fill-[#ffffff]"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(0 13.238) rotate(-90)"
                    >
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M21.733,20.986a.908.908,0,0,0-1.28,0l-4.212,4.14V11.908a.908.908,0,1,0-1.816,0V25.1l-4.113-4.113a.908.908,0,0,0-1.289,1.28l5.783,5.783a.817.817,0,0,0,1.153,0l5.774-5.783a.908.908,0,0,0,0-1.28Z"
                        transform="translate(-8.759 -11)"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </Link>
          </section>
        </div>
        <div className="bg-white pt-32">
          <section className=" bg-[#F5F5F5] px-5 py-28">
            <div className="mx-auto grid w-[1225px] max-w-full grid-cols-1 gap-16 md:grid-cols-2">
              <Image
                src="/landing-protect.png"
                className="hidden w-[577px] max-w-full cursor-pointer md:block"
                onClick={handleOpenSecond}
                alt="Protect"
                width={405}
                height={166}
              />
              <Image
                className="hidden w-[577px] max-w-full cursor-pointer md:block"
                onClick={handleOpen}
                src="/landing-rewards.png"
                alt="Rewards"
                width={405}
                height={166}
              />
              <Image
                src="/landing-protect-mobile.png"
                className="w-[577px] max-w-full cursor-pointer md:hidden"
                onClick={handleOpenSecond}
                alt="Protect"
                width={405}
                height={166}
              />
              <Image
                className="w-[577px] max-w-full cursor-pointer md:hidden"
                onClick={handleOpen}
                src="/landing-rewards-mobile.png"
                alt="Rewards"
                width={405}
                height={166}
              />
            </div>
          </section>
        </div>
        <div className="bg-[#f5f5f5] pb-52">
          <section className="justify-centerc mx-auto w-[460px]  max-w-full  text-center">
            <Image
              src="/landing-end.png"
              width={302}
              height={325}
              className="mx-auto inline-block"
              alt="Footer image"
            />
            <p className="pb-10 pt-2 text-3xl font-light text-textGreyAlt">
              Start saving for your child's education today and give them{" "}
              <span className="font-bold">the best</span> start in life.
            </p>
            <a
              className="mx-auto mb-3 inline-block cursor-pointer self-center rounded-full bg-gradient-to-r from-secondaryGreen to-primaryGreen px-11 py-4 text-center text-base font-light text-white md:mb-0 md:ml-3"
              href={callButtonUrl}
              target="_blank"
            >
              CALL ME BACK
            </a>
          </section>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            outline: "none",
            border: "none",
          }}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                maxWidth: "900px",
              },
            },
          }}
          scroll="body"
        >
          <DialogContent
            className=" outline-none"
            dividers={scroll === "paper"}
            style={{
              padding: 0,
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <div className="relative flex min-h-[204px] items-center bg-[url('/modal-header.jpg')] bg-cover px-10">
              <h3 className="text-3xl font-light uppercase text-white">
                <span className="font-bold">Make your savings journey</span>
                <br /> so much more rewarding
              </h3>
              <Image
                src="/icon-modal-close.svg"
                width={16}
                height={16}
                alt="Close Button"
                className="absolute right-5 top-5 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div className="bg-white px-8 py-5 font-light text-textGreyAlt md:px-10 md:py-10">
              <p className="pb-5 font-bold">
                Old Mutual Rewards is a free-to-join financial wellness
                programme designed to partner with you on your journey towards
                financial freedom.
              </p>
              <p className="pb-5">
                You can get rewarded for saving for your child's education,
                having the right life and disability cover and taking control of
                your finances.
              </p>
              <p className="pb-5">
                <span className="font-bold text-primaryGreen">
                  LEARN AND EARN:{" "}
                </span>
                Earn points for learning how to take control of your finances
                using our online financial education content, online
                assessments, Rewards calculators and tools.
              </p>
              <p className="pb-5">
                <span className="font-bold text-primaryGreen">GET MORE: </span>
                Your Rewards tier determines the rate at which you earn points
                and other discounted benefits. You can earn a percentage of your
                premiums on qualifying products in Rewards points monthly.
              </p>
              <p className="pb-7">
                <span className="font-bold text-primaryGreen">
                  GET REWARDED:{" "}
                </span>
                Redeem your points with our partners or save them for the
                future. Buy groceries and fuel, watch a movie, treat the family
                to a meal, save points in your Old Mutual Money Account, or even
                donate your points to a charity.
              </p>
              <p className="pb-7 font-bold">
                There are many more ways to earn points such as:
              </p>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">Speaking to an adviser</span>
                <span>
                  <span className="inline-block w-[30px]">250</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">Referring a friend</span>
                <span>
                  <span className="inline-block w-[30px]">200</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">
                  Completing online financial courses
                </span>
                <span>
                  <span className="inline-block w-[30px]">50</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">
                  Using the financial and education calculators
                </span>
                <span>
                  <span className="inline-block w-[30px]">20</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">Requesting a credit report</span>
                <span>
                  <span className="inline-block w-[30px]">100</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <span className="list-item">Completing a survey</span>
                <span>
                  <span className="inline-block w-[30px]">50</span> points
                </span>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-10 pl-4 md:gap-20">
                <p>and much more...</p>
              </div>
            </div>
            <div>
              <div className="relative flex min-h-[204px] items-center justify-between bg-[url('/modal-footer.jpg')] bg-cover px-10 py-10">
                <div>
                  <h3 className="flex-shrink text-lg font-light text-white md:text-xl">
                    <span>It's free and anybody can join. </span>
                    <Link
                      href="https://oldmutual.co.za/rewards"
                      className="border-b"
                      target="_blank"
                    >
                      Register today.
                    </Link>
                  </h3>
                  <p className="max-w-[450px] text-sm text-white">
                    Old Mutual Rewards (Pty) Ltd. is a company in the Old Mutual
                    Group. Terms, Conditions and Programme Rules apply.
                  </p>
                </div>
                <Link
                  href="https://oldmutual.co.za/rewards"
                  className="ml-10 flex-shrink-0"
                  target="_blank"
                >
                  <Image
                    src="/modal-arrow.svg"
                    width={16}
                    height={16}
                    alt="Close Button"
                    className="flex-shrink-0"
                  />
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={openSecond}
          onClose={handleCloseSecond}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            outline: "none",
            border: "none",
          }}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                maxWidth: "900px",
              },
            },
          }}
          scroll="body"
        >
          <DialogContent
            className=" outline-none"
            dividers={scroll === "paper"}
            style={{
              padding: 0,
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <div className="relative flex min-h-[204px] items-center bg-[url('/modal-header-second.jpg')] bg-cover px-10">
              <h3 className="text-3xl font-light text-white">
                PROTECT YOUR
                <br />
                <span className="font-bold">EDUCATION SAVINGS GOAL</span>
              </h3>
              <Image
                src="/icon-modal-close.svg"
                width={16}
                height={16}
                alt="Close Button"
                className="absolute right-5 top-5 cursor-pointer"
                onClick={handleCloseSecond}
              />
            </div>
            <div className="grid grid-rows-2 gap-10 bg-white px-8 py-5 font-light text-textGreyAlt md:flex md:px-24 md:py-28">
              <Image
                src="/graduation.png"
                width={200}
                height={200}
                alt="Graduation"
              />
              <div className="flex-shrink">
                <p className="pb-10 font-bold">
                  It is important to save for education, but it's equally
                  important to protect those dreams.
                </p>
                <p>
                  Our life and disability cover options ensure that you can
                  still achieve your savings goals if anything happens to you.
                  Ask your adviser about the right life and disability cover for
                  you and your family, or{" "}
                  <Link
                    href="https://www.oldmutual.co.za/personal/solutions/life-and-disability/life-insurance/"
                    target="_blank"
                    className="border-b border-textGreyAlt"
                  >
                    find out more here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
