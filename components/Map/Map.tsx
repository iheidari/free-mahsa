import React, { useState } from "react";
import provinces from "../../fixtures/provinces.json";
import useTranslate from "../../hooks/useTranslate";
import { ProvinceType } from "../../types";
import { paths } from "./paths";
import { getProvinceCount } from "./util";

type Props = {
  onClick: (province?: ProvinceType) => void;
};

const Map = ({ onClick }: Props) => {
  const { t } = useTranslate();

  const [selectedProvince, setSelectedProvince] = useState("");

  const handleClick = (id: string) => () => {
    setSelectedProvince(id);
    onClick(provinces.find((p) => p.code === id));
  };

  const provincesComponent = paths.map((path) => {
    const provinceName = t(
      provinces.find((p) => p.code === path.id)?.nameFa,
      "province"
    );
    return (
      <React.Fragment key={path.id}>
        <path
          d={path.d}
          className={`hover:fill-slate-500 cursor-pointer ${
            selectedProvince === path.id ? "fill-slate-500" : ""
          }`}
          onClick={handleClick(path.id)}
        >
          <title>{provinceName}</title>
        </path>
        <text
          x={path.x}
          y={path.y}
          className="cursor-pointer"
          onClick={handleClick(path.id)}
        >
          <title>{provinceName}</title>
          {getProvinceCount(path.id)}
        </text>
      </React.Fragment>
    );
  });

  return (
    <div dir="rtl">
      <svg
        fill="#7c7c7c"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 1000 908"
      >
        {provincesComponent}
      </svg>
    </div>
  );
};

export default Map;
