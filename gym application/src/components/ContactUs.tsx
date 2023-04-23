import { SelectedPage } from "@/common/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import React from "react";
import HText from "./HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="w-5/6 pt-24 pb-32 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* Form and img */}
        <div className="md:flex justify-between gap-8 mt-10">
          <motion.div
            className="basic-3/5 md:mt-0 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/satancrew.true@gmail.com"
            >
              <input
                className={inputStyles}
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-primary-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 symbols"}
                </p>
              )}
              <input
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 symbols"}
                </p>
              )}

              <button
                type="submit"
                className="bg-secondary-500 hover:bg-secondary-400 hover:text-white px-20 py-3 my-5 transition duration-500 rounded-lg"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="basis-2/5 md:mt-0 relative mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext before:abosulte w-full before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                alt="contact-us-image"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
