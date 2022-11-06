import React from "react";
import "../../styles/Map.module.css";
import { paths } from "./data";

type Props = {};

const Map = (props: Props) => {
  return (
    <svg
      //   baseprofile="tiny"
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
          <path d={path.d} fill="lightblue"></path>
          <text x={path.x} y={path.y}>
            {path.id}
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
};

export default Map;
