import React from "react";
import "../../styles/Map.module.css";
import { paths } from "./data";

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
        version="1.2"
        viewBox="0 0 1000 908"
        onMouseUp={(event) => console.dir(event)}
      >
        {paths.map((path) => (
          <React.Fragment key={path.id}>
            <path d={path.d} className="hover:fill-slate-500"></path>
            <text x={path.x} y={path.y}>
              {path.id}
            </text>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default Map;
