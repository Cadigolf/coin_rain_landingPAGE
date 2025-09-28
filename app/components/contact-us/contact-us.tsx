import Image from "next/image";
import Button from "../shared/button";
import Animate from "../shared/animate";

export default function ContactUs() {
  return (
    <div className="relative mx-auto mb-[100px] max-w-[1000px]">
      <div className="flex flex-col items-center space-y-3 text-center sm:space-y-7">
        <Animate type="fadeUp">
          <h1 className="text-gradient text-[36px] leading-[1.2] font-semibold lg:text-5xl">
            The Future of <br className="sm:hidden" /> Retail is Tokenized.
          </h1>
        </Animate>

        <Animate type="fadeUp">
          <p className="text-paragraph max-w-[760px] px-2 text-center text-sm leading-[1.6] sm:text-[18px] lg:text-[23px]">
            Join HubsAI and transform your brand with tokenized products,
            instant fulfillment, and built-in rewards.
          </p>
        </Animate>
      </div>

      <Animate type="fadeIn">
        <div className="relative overflow-x-clip">
          {/* Overlay */}
          <Image
            src="/images/contact-us/contact-us-bg.png"
            className="pointer-events-none z-10 hidden w-full sm:flex"
            width={1000}
            height={1000}
            alt="contact-us-bg"
          />

          <Image
            src="/images/contact-us/contact-us-bg-mobile.png"
            className="pointer-events-none z-10 mt-8 w-full sm:hidden"
            width={1000}
            height={1000}
            alt="contact-us-bg-mobile"
          />

          {/* Glow */}
          <div className="bg-background pointer-events-none absolute -bottom-[400px] z-0 hidden h-[335px] w-[1000px] rounded-full blur-[75px] sm:flex" />
        </div>
      </Animate>

      {/* Contact Button */}
      <Animate type="fadeUp">
        <div className="relative flex w-full justify-center sm:absolute sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2">
          <Button>
            <p className="text-gradient">Partner With Us</p>
          </Button>
        </div>
      </Animate>
    </div>
  );
}
