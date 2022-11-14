import React, { useState } from "react";
import provinces from "../../fixtures/provinces";
import { paths } from "./paths";
import { getProvinceCount } from "./util";

type Props = {
  onClick: (provinceCode?: string) => void;
};

const Map = ({ onClick }: Props) => {
  const [selectedProvince, setSelectedProvince] = useState("");

  const handleClick = (id: string) => () => {
    setSelectedProvince(id);
    onClick(provinces.find((p) => p.code === id)?.nameFa);
  };

  return (
    <svg
      fill="#7c7c7c"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 1000 908"
    >
      {paths.map((path) => (
        <React.Fragment key={path.id}>
          <path
            d={path.d}
            className={`hover:fill-slate-500 cursor-pointer ${
              selectedProvince === path.id ? "fill-slate-500" : ""
            }`}
            onClick={handleClick(path.id)}
          >
            <title>{provinces.find((p) => p.code === path.id)?.nameFa}</title>
          </path>
          <text
            x={path.x}
            y={path.y}
            className="cursor-pointer"
            onClick={handleClick(path.id)}
          >
            <title>{provinces.find((p) => p.code === path.id)?.nameFa}</title>
            {getProvinceCount(path.id)}
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
};

export default Map;
