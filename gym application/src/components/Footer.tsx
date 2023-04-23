import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content md:flex w-5/6 gap-16 mx-auto">
        <div className="basis-1/2 md:mt-0 mt-16">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            illo soluta qui quam possimus. Quibusdam sit, eum odio laudantium
            rem id consequatur accusantium, veritatis iste illo saepe repellat
            voluptatem fugit.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-1/4 md:mt-0 mt-16">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="basis-1/4 md:mt-0 mt-16">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(123) - 456 - 789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
