"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const montserrat = Montserrat({ subsets: ["latin"] });
const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <footer className="relative z-10 bg-[#1A1A1A] px-5">
        <div className="mx-auto flex w-full max-w-[1250px] gap-10 md:gap-24">
          <div className="-mt-7 flex w-[74px] flex-shrink-0 items-start justify-center bg-gradient-to-b from-primaryGreen to-secondaryGreen px-0 py-11">
            <Image
              src="/old_mutual_footer.svg"
              width={20}
              height={165}
              alt="Old Mutual"
            />
          </div>
          <div className="flex-shrink pb-16 pt-20 text-sm font-light text-bodyBackground">
            {pathname === "/" && (
              <div className="flex h-full items-center">
                <div>
                  <p
                    className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                  >
                    Copyright Old Mutual Limited 2024{" "}
                    <span className="inline-block px-3">|</span>
                    <Link
                      href="https://www.oldmutual.co.za/privacy-notice/"
                      target="_blank"
                      className={`${montserrat.className} text-sm text-bodyBackground no-underline`}
                    >
                      Privacy Policy
                    </Link>{" "}
                    <Link
                      href="https://www.oldmutual.co.za/cookie-policy/"
                      target="_blank"
                      className={`${montserrat.className} ml-3 text-sm text-bodyBackground no-underline`}
                    >
                      Cookie Policy
                    </Link>
                  </p>
                  <p
                    className={`${montserrat.className} text-sm font-light text-bodyBackground`}
                  >
                    Old Mutual Life Assurance Company (SA) Limited is a licensed
                    FSP and Life Insurer.
                  </p>
                </div>
              </div>
            )}
            {pathname === "/cost-of-education/" && (
              <>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  DISCLAIMER: The information in this calculator is intended for
                  illustrative purposes only and the values shown aren&#39;t
                  guaranteed. This isn&#39;t an offer and it&#39;s not part of a
                  contractual undertaking by Old Mutual Limited, Old Mutual Life
                  Assurance Company (South Africa) Ltd or any of Old Mutual
                  Limited&#39;s subsidiaries. The calculator also doesn&#39;t
                  represent financial advice by any of the companies in the Old
                  Mutual Limited Group. The personal information provided will
                  only be used to generate a report and no personal information
                  provided will be stored during this process. Old Mutual Life
                  Assurance Company (SA) Limited is a licensed FSP and life
                  insurer.
                </p>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  Assumptions: Investment strategies are taken at their target
                  midpoint. CPI (Consumer Price Index) or inflation is set at 5%
                  per year. Education inflation has been set at 7%. Although
                  tuition fees were sourced during research, these figures can
                  vary from year to year. Exchange rates are assumed as follows:
                  One US$ is R18.50, and one GBP is R23.00.
                </p>
                <p
                  className={`${montserrat.className} text-sm font-light text-bodyBackground`}
                >
                  Copyright Old Mutual Limited 2024{" "}
                  <span className="inline-block px-3">|</span>
                  <Link
                    href="https://www.oldmutual.co.za/privacy-notice/"
                    target="_blank"
                    className={`${montserrat.className} text-sm text-bodyBackground no-underline`}
                  >
                    Privacy Policy
                  </Link>{" "}
                  <Link
                    href="https://www.oldmutual.co.za/cookie-policy/"
                    target="_blank"
                    className={`${montserrat.className} ml-3 text-sm text-bodyBackground no-underline`}
                  >
                    Cookie Policy
                  </Link>
                </p>
              </>
            )}
            {pathname === "/loans-vs-savings/" && (
              <>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  DISCLAIMER: The information in this calculator is intended for
                  illustrative purposes only and the values shown aren't
                  guaranteed. This isn't an offer and it's not part of a
                  contractual undertaking by Old Mutual Limited, Old Mutual Life
                  Assurance Company (South Africa) Ltd or any of Old Mutual
                  Limited's subsidiaries. The calculator also doesn't represent
                  financial advice by any of the companies in the Old Mutual
                  Limited Group. The personal information provided will only be
                  used to generate a report and no personal information provided
                  will be stored during this process. Old Mutual Life Assurance
                  Company (SA) Limited is a licensed FSP and life insurer.
                </p>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  Assumptions: Investment strategies are taken at their target
                  midpoint. CPI (Consumer Price Index) or inflation is set at 5%
                  per year. Education inflation has been set at 7%. Yearly
                  growth on investment is 8%. Yearly escalation rate of 7%. The
                  loan is a 5-year term. Interest on loan is 15.5% per year.
                </p>
                <p
                  className={`${montserrat.className} text-sm font-light text-bodyBackground`}
                >
                  Copyright Old Mutual Limited 2024{" "}
                  <span className="inline-block px-3">|</span>
                  <Link
                    href="https://www.oldmutual.co.za/privacy-notice/"
                    target="_blank"
                    className={`${montserrat.className} text-sm text-bodyBackground no-underline`}
                  >
                    Privacy Policy
                  </Link>{" "}
                  <Link
                    href="https://www.oldmutual.co.za/cookie-policy/"
                    target="_blank"
                    className={`${montserrat.className} ml-3 text-sm text-bodyBackground no-underline`}
                  >
                    Cookie Policy
                  </Link>
                </p>
              </>
            )}
            {pathname === "/how-much-to-save/" && (
              <>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  DISCLAIMER: The information in this calculator is intended for
                  illustrative purposes only and the values shown aren&#39;t
                  guaranteed. This isn&#39;t an offer and it&#39;s not part of a
                  contractual undertaking by Old Mutual Limited, Old Mutual Life
                  Assurance Company (South Africa) Ltd or any of Old Mutual
                  Limited&#39;s subsidiaries. The calculator also doesn&#39;t
                  represent financial advice by any of the companies in the Old
                  Mutual Limited Group. The personal information provided will
                  only be used to generate a report and no personal information
                  provided will be stored during this process. Old Mutual Life
                  Assurance Company (SA) Limited is a licensed FSP and life
                  insurer.
                </p>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  Assumptions: Investment strategies are taken at their target
                  midpoint. CPI (Consumer Price Index) or inflation is set at 5%
                  per year. Education inflation has been set at 7%. Yearly
                  growth on investment is 8%. Yearly escalation rate of 7%. The
                  various options for starting premiums are dependent on the
                  type of product you are invested in, and that you continuee
                  saving until the last year of education. Calculations assume
                  growth on existing investment is the same as new investment.
                </p>
                <p
                  className={`${montserrat.className} text-sm font-light text-bodyBackground`}
                >
                  Copyright Old Mutual Limited 2024{" "}
                  <span className="inline-block px-3">|</span>
                  <Link
                    href="https://www.oldmutual.co.za/privacy-notice/"
                    target="_blank"
                    className={`${montserrat.className} text-sm text-bodyBackground no-underline`}
                  >
                    Privacy Policy
                  </Link>{" "}
                  <Link
                    href="https://www.oldmutual.co.za/cookie-policy/"
                    target="_blank"
                    className={`${montserrat.className} ml-3 text-sm text-bodyBackground no-underline`}
                  >
                    Cookie Policy
                  </Link>
                </p>
              </>
            )}
            {pathname === "/pay-yourself-first/" && (
              <>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  DISCLAIMER: The information in this calculator is intended for
                  illustrative purposes only and the values shown aren't
                  guaranteed. This isn't an offer and it's not part of a
                  contractual undertaking by Old Mutual Limited, Old Mutual Life
                  Assurance Company (South Africa) Ltd or any of Old Mutual
                  Limited's subsidiaries. The calculator also doesn't represent
                  financial advice by any of the companies in the Old Mutual
                  Limited Group. The personal information provided will only be
                  used to generate a report and no personal information provided
                  will be stored during this process. Old Mutual Life Assurance
                  Company (SA) Limited is a licensed FSP and life insurer.
                </p>
                <p
                  className={`${montserrat.className} pb-5 text-sm font-light text-bodyBackground`}
                >
                  ASSUMPTIONS: Inflation is assumed to be 5% per year and
                  investment strategies are taken at their target midpoint.
                </p>
                <p
                  className={`${montserrat.className} text-sm font-light text-bodyBackground`}
                >
                  Copyright Old Mutual Limited 2024{" "}
                  <span className="inline-block px-3">|</span>
                  <Link
                    href="https://www.oldmutual.co.za/privacy-notice/"
                    target="_blank"
                    className={`${montserrat.className} text-sm text-bodyBackground no-underline`}
                  >
                    Privacy Policy
                  </Link>{" "}
                  <Link
                    href="https://www.oldmutual.co.za/cookie-policy/"
                    target="_blank"
                    className={`${montserrat.className} ml-3 text-sm text-bodyBackground no-underline`}
                  >
                    Cookie Policy
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
