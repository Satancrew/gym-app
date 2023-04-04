import { SelectedPage } from "@/common/types";
import ActionButton from "./ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="home" className="bg-gray-20 md:h-full md:pb-0 gap-16 py-10">
      {/* image and main header */}
      <div className="md:flex md:h-5/6 items-center justify-center w-5/6 mx-auto">
        {/* main header */}
        <div className="md:basis-3/5 z-10 mt-32">
          {/* heading */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
