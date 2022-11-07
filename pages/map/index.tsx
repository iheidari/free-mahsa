import React, { useState } from "react";
import Cards from "../../components/Cards/Cards";
import Map from "../../components/Map";
import data from "../../data/output.json";

type Props = {};

const MapPage = (props: Props) => {
  const [selectedProvince, setSelectedProvince] = useState<
    string | undefined
  >();
  const [cards, setCards] = useState<any[]>([]);
  const handleClick = (province?: string) => {
    setSelectedProvince(province);
    const result = data
      .filter((d) => d.province === province)
      .map((data) => ({
        nameFa: data.name,
      }));
    setCards(result);
  };
  return (
    <>
      <main
        className={`min-h-screen py-16 px-8 flex flex-1 flex-col justify-center items-center`}
      >
        <div className="max-w-2xl w-full">
          <Map onClick={handleClick} />
        </div>
        <div className="mt-8 min-h-screen">
          <Cards rawData={cards} />
        </div>
      </main>
    </>
  );
};

export default MapPage;
