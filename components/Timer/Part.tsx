import React from "react";

type Props = { value: number; title: string };

const Part = ({ value, title }: Props) => {
  return (
    <div className="gap-1 items-baseline">
      <h3 className="text-sm text-white">{value}</h3>
      <h4 className="text-[9px] text-white">{title}</h4>
    </div>
  );
};

export default Part;
