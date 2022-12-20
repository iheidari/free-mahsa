import React, { useState } from "react";
import Cards from "../../components/Cards-Arrested";
import Header from "../../components/Header";
import Map from "../../components/Map";
import Details from "../../components/Map/Details";
import Translate from "../../components/Translate";
import data from "../../data/output.json";
import { ProvinceType } from "../../fixtures/provinces";
import useTranslate from "../../hooks/useTranslate";
import { sortArrested } from "../../services/sort";

const MapPage = () => {
  const { t } = useTranslate();
  const [selectedProvince, setSelectedProvince] = useState<
    ProvinceType | undefined
  >();
  const [cards, setCards] = useState<any[]>([]);
  const handleClick = (province?: ProvinceType) => {
    setSelectedProvince(province);
    if (!province) {
      setCards([]);
      return;
    }
    const result = data
      .filter((d: any) => d.province === province.code)
      .sort(sortArrested);
    setCards(result);
  };
  return (
    <main className="min-h-screen flex flex-1 flex-col justify-center items-center">
      <Header />
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
              {t(selectedProvince?.nameFa, "province") ||
                t("لطفا یک استان را انتخاب نمایید")}
            </div>
            <div>
              <Details data={cards.length === 0 ? data : cards} />
            </div>
          </div>
          <div className="text-center md:px-4">
            <Translate>منبع</Translate>:{" "}
            <a
              href="https://t.me/Followupiran"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              <Translate>
                کمیته پیگیری وضعیت بازداشت‌شدگان قیام زن، زندگی، آزادی
              </Translate>
            </a>
            <div>
              <Translate>
                اسامی به روز شده در بیست و هشتم آذر ساعت ۲ بعد از ظهر
              </Translate>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 min-h-screen">
        <Cards rawData={cards} />
      </div>
    </main>
  );
};

export default MapPage;
