import React from "react";
import Filters from "./Filters";

const Popup = (_props: {}, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className="w-full bg-white rounded-5p border-gray-300 p-2 shadow-md mt-3"
    >
      <Filters />
    </div>
  );
};

export default React.forwardRef<HTMLDivElement>(Popup);
