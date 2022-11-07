import React from "react";
import Map from "../../components/Map";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center bg-slate-400">
      <main className="w-5/6">
        <Map />
      </main>
    </div>
  );
};

export default index;
