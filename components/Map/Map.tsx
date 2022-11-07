import React from "react";
import provinces from "../../fixtures/provinces";
import "../../styles/Map.module.css";
import { paths } from "./paths";
import { getProvinceCount } from "./util";

type Props = {};

const Map = (props: Props) => {
  return (
    <div style={{ width: "700px", backgroundColor: "gray" }}>
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
              className="hover:fill-slate-500"
              onClick={() =>
                console.dir(provinces.find((p) => p.code === path.id)?.nameEn)
              }
            >
              <title>{provinces.find((p) => p.code === path.id)?.nameFa}</title>
            </path>
            <text x={path.x} y={path.y}>
              <title>{provinces.find((p) => p.code === path.id)?.nameFa}</title>
              {getProvinceCount(path.id)}
            </text>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default Map;
