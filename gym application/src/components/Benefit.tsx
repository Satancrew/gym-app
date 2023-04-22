import { SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: {
    opacity: 0, scale: 0.9
  },
  visible: { opacity: 1, scale: 1},
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div className="px-5 py-16 mt-5 text-center border-2 border-gray-100 rounded-md"
    variants={childVariant}>
      <div className="flex justify-center mb-4">
        <div className="bg-primary-100 p-4 border-2 border-gray-100 rounded-full">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-primary-500 hover:text-secondary-500 text-sm font-bold underline"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
