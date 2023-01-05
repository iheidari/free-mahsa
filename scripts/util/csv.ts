import csv from "csvtojson";
import { translateType } from "../types";

export const readDataCsvFile = async () => {
  let all = await csv().fromFile(`./data/data.csv`);
  const keys = Object.keys(all[0]);
  checkDataCsvKeys(keys);
  all = all.map((item) => ({
    name: item[keys[0]],
    city: item[keys[1]],
    status: item[keys[2]],
    type: item[keys[3]],
    details: item[keys[4]],
  }));
  return all;
};

function checkDataCsvKeys(keys: string[]) {
  if (
    keys[0] !== "ّنام و نام خانوادگی" ||
    keys[1] !== "شهر" ||
    keys[2] !== "وضعیت آزادی/ زندانی" ||
    keys[3] !== "نوع فعالیت" ||
    keys[4] !== "توضیحات بیشتر"
  ) {
    console.warn("Keys does not match(fa)");
  }
}

export const readKilledCsvFile = async () => {
  let all = await csv().fromFile(`./data/killed.csv`);
  all = all.map((item) => ({
    name: item["نام"],
    age: item["سن"],
    city: item["مکان کشته‌شدن"],
    killedDate: item["تاریخ کشته‌شدن"],
    reason: item["علت مرگ"],
    details: item["توضیحات"],
  }));
  return all;
};

export const readTranslateCsvFile = async (
  filename: "name" | "details"
): Promise<translateType[]> => {
  let all = await csv().fromFile(`./data/${filename}.csv`);
  all = all.map((item) => ({
    fa: item.fa,
    en: item.en,
  }));
  return all;
};
