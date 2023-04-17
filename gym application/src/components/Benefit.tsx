import { SelectedPage } from "@/common/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({icon, title, description, setSelectedPage} : Props) => {
  return (
    <div className="px-5 py-16 mt-5 text-center border-2 border-gray-100 rounded-md">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p4">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
