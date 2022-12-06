import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cards from "../../components/Cards-Arrested";
import Map from "../../components/Map";
import Details from "../../components/Map/Details";
import Translate from "../../components/Translate";
import data from "../../data/output.json";
import useTranslate from "../../hooks/useTranslate";
import { sortArrested } from "../../services/sort";

const MapPage = () => {
  const { t } = useTranslate();
  const [selectedProvince, setSelectedProvince] = useState<
    string | undefined
  >();
  const [cards, setCards] = useState<any[]>([]);
  const handleClick = (province?: string) => {
    setSelectedProvince(province);
    const result = data
      .filter((d: any) => d.province === province)
      .sort(sortArrested);
    setCards(result);
  };
  return (
    <main className="min-h-screen flex flex-1 flex-col justify-center items-center">
      <header className="flex w-full pt-4 mb-2 bg-slate-300 justify-center ">
        <div className="flex w-full max-w-6xl flex-row justify-between  items-center">
          <div className="text-3xl">
            <Translate>لیست دستگیرشدگان قیام زن، زندگی، آزادی</Translate>
          </div>
          <div>
            <Link href="/" passHref>
              <a>
                <Image
                  className="rounded-50p "
                  alt={t("زن زندگی آزادی")}
                  src="/images/logo.jpg"
                  width={56}
                  height={56}
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div
        dir={t("rtl")}
        className="flex flex-col w-full justify-center gap-9 md:flex-row"
      >
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
              {selectedProvince || t("لطفا یک استان را انتخاب نمایید")}
            </div>
            <div>
              <Details data={cards.length === 0 ? data : cards} />
            </div>
          </div>
          <div className="text-center">
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
                اسامی به روز شده در دوازدهم آذر ساعت ۶ بعد از ظهر
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
