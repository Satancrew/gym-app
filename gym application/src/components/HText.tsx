import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="text-4xl basis-3/5 font-montserrat font-bold">{children}</h1>
  );
};

export default HText;
