import cityProvince from "../fixtures/city-province";
import { mapper } from "./mappings";
import { IData } from "./types";
import { readFile } from "./util";

const analyze = async () => {
  let all = await readFile();
  console.log("🚀 ~ jsonArray", all.length);

  all = all.filter((data) => data.name);
  console.log("🚀 ~ removeEmptyRows", all.length);

  all = all.map(mapper);

  const cityWithNoProvince: string[] = [];
  const noCity: string[] = [];
  // No province found for the city
  all.forEach((data: IData) => {
    if (cityProvince.findIndex((cp) => cp.city === data.city) !== -1) {
      return;
    }
    if (!data.city) {
      noCity.push(data.name);
      return;
    }
    if (!cityWithNoProvince.includes(data.city)) {
      cityWithNoProvince.push(data.city);
    }
  });

  console.log("Cities With No Province: " + cityWithNoProvince.length);

  const allCityProvinces = [
    ...cityProvince,
    ...cityWithNoProvince.map((city) => ({
      city,
      province: "",
    })),
  ];

  allCityProvinces
    .sort((cnp1, cnp2) => cnp1.city.localeCompare(cnp2.city))
    .forEach((cnp) => {
      console.log(`{ city: "${cnp.city}", province: "${cnp.province}" },`);
    });
};

analyze();
