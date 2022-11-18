import React, { useState } from "react";
import Cards from "../../components/Cards-Arrested";
import Map from "../../components/Map";
import Details from "../../components/Map/Details";
import data from "../../data/output.json";
import { sortArrested } from "../../services/sort";

const MapPage = () => {
  const [selectedProvince, setSelectedProvince] = useState<
    string | undefined
  >();
  const [cards, setCards] = useState<any[]>([]);
  const handleClick = (province?: string) => {
    setSelectedProvince(province);
    const result = data
      .filter((d) => d.province === province)
      .sort(sortArrested);
    setCards(result);
  };
  return (
    <>
      <main
        className={`min-h-screen py-16 px-8 flex flex-1 flex-col justify-center items-center`}
      >
        <div className="flex flex-col w-full justify-center gap-9 md:flex-row">
          <div className="max-w-2xl w-full">
            <Map onClick={handleClick} />
          </div>
          <div className="max-w-96 flex gap-5 flex-col">
            <div className="text-center">
              <div
                className={`text-center h-24 ${
                  selectedProvince ? "text-5xl" : "text-2xl"
                }`}
              >
                {selectedProvince || "لطفا یک استان را انتخاب نمایید"}
              </div>
              <div>
                <Details data={cards.length === 0 ? data : cards} />
              </div>
            </div>
            <div className="text-center">
              منبع:{" "}
              <a
                href="https://t.me/Followupiran"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                کمیته پیگیری وضعیت بازداشت‌شدگان قیام زن، زندگی، آزادی
              </a>
              <div>به روز شده در بیست و هفت آبان - ۶ صبح</div>
            </div>
          </div>
        </div>
        <div className="mt-16 min-h-screen">
          <Cards rawData={cards} />
        </div>
      </main>
    </>
  );
};

export default MapPage;
