import { BenefitType, SelectedPage } from "@/common/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "./HText";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, facere",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, facere",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, facere",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* Header */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THEN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* Benefits */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((el: BenefitType) => (
            <Benefit
              key={el.title}
              icon={el.icon}
              title={el.title}
              description={el.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
