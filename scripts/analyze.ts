import csv from "csvtojson";
import cityProvince from "../fixtures/city-province";
import { mapper } from "./mappings";
import { IData } from "./types";

const getCities = (input: IData[]) => {
  return input.reduce((acc: string[], data: IData) => {
    if (!acc.includes(data.city)) {
      acc.push(data.city);
    }
    return acc;
  }, []);
};

const analyze = async () => {
  let all = await csv().fromFile("./data/list.csv");
  console.log("🚀 ~ jsonArray", all.length);

  all = all.filter((data) => data.name);
  console.log("🚀 ~ removeEmptyRows", all.length);

  all = all.map(mapper);

  // No province found for the city
  all.forEach((data: IData) => {
    if (cityProvince.findIndex((cp) => cp.city === data.city) === -1) {
      console.log(`🚀 ~ Province not found: ${JSON.stringify(data, null, 2)}`);
    }
  });
};

analyze();
