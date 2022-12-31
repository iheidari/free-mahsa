import cities from "../fixtures/cities.json";
import mapper from "./mapping";
import { IData } from "./types";
import { readDataCsvFile } from "./util";
import names from "../i18n/name.json";
import { writeFile } from "fs/promises";

const readFarsi = async () => {
  let all = await readDataCsvFile();
  console.log("🚀 ~ jsonArray", all.length);

  all = all.filter((data) => data.name);
  console.log("🚀 ~ removeEmptyRows", all.length);

  all = all.map(mapper);
  const correctNames = Object.keys(names)
    .map((name) => ({
      fa: name.trim(),
      en: (names as any)[name].en,
    }))
    .reduce((acc: any, cur: any) => {
      if (acc.findIndex((item: any) => (item as any).fa === cur.fa) === -1) {
        acc.push(cur);
      }
      return acc;
    }, []);

  let counter = 0;
  all.forEach((item) => {
    const index = correctNames.findIndex((cn: any) => cn.fa === item.name);
    if (index === -1) {
      counter++;
      console.log(item.name);
    }
  });
  console.log("No english name translation found: ", counter);

  const cityWithNoProvince: string[] = [];
  const noCity: string[] = [];
  // No province found for the city
  all.forEach((data: IData) => {
    if (cities.findIndex((cp) => cp.nameFa === data.city) !== -1) {
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
    ...cities.filter((city) => city.provinceCode),
    ...cityWithNoProvince.map((city) => ({
      nameFa: city,
      nameEn: "",
      provinceCode: "",
    })),
  ];

  allCityProvinces.sort((cnp1, cnp2) => cnp1.nameFa.localeCompare(cnp2.nameFa));

  await writeFile(
    `./fixtures/cities.json`,
    JSON.stringify(allCityProvinces, null, 2)
  );
};

const analyze = async () => {
  await readFarsi();
};

analyze();
