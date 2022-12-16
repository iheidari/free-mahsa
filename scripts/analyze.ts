import cities from "../fixtures/cities";
import mapper from "./mappings";
import { IData } from "./types";
import { readDataFile } from "./util";
import names from "../i18n/names.json";

const readFarsi = async () => {
  let all = await readDataFile("fa");
  console.log("🚀 ~ jsonArray", all.length);

  all = all.filter((data) => data.name);
  console.log("🚀 ~ removeEmptyRows", all.length);

  all = all.map(mapper("fa"));
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

  if (cityWithNoProvince.length > 0) {
    const allCityProvinces = [
      ...cities,
      ...cityWithNoProvince.map((city) => ({
        nameFa: city,
        nameEn: "",
        provinceCode: "",
      })),
    ];

    allCityProvinces
      .sort((cnp1, cnp2) => cnp1.nameFa.localeCompare(cnp2.nameFa))
      .forEach((cnp) => {
        console.log(
          `{ nameFa: "${cnp.nameFa}",nameEn: "${cnp.nameEn}", provinceCode: "${cnp.provinceCode}" },`
        );
      });
  }
};

const analyze = async () => {
  await readFarsi();
};

analyze();
