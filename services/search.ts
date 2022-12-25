import { rawCardType } from "../components/Cards-Arrested/Cards";
import data from "../data/output.json";
import { getProvinceCode } from "./geo";
import { mapper } from "./mapper";
import { getActivityBySlug, getProvinceBySlug, getStatusBySlug } from "./slug";

export const getCards = (slugs: undefined | string | string[]) => {
  if (typeof slugs == "undefined") {
    return data.slice(0, 30).map(mapper);
  }
  if (typeof slugs == "string" || slugs.length == 1) {
    const term = typeof slugs == "string" ? slugs : slugs[0];
    return data
      .filter(
        (item) =>
          item.name.match(term) ||
          item.nameEn?.toLowerCase().match(term.toLowerCase()) ||
          item.city.match(term) // only work for farsi
      )
      .slice(0, 100)
      .map(mapper);
  }
  if (slugs[0] === "province") {
    return data
      .filter(
        (item) => item.province == getProvinceCode(getProvinceBySlug(slugs[1]))
      )
      .slice(0, 100)
      .map(mapper);
  }
  if (slugs[0] === "status") {
    return data
      .filter((item) => item.status == getStatusBySlug(slugs[1]))
      .slice(0, 100)
      .map(mapper);
  }
  if (slugs[0] === "activity") {
    return data
      .filter((item) => item.type == getActivityBySlug(slugs[1]))
      .slice(0, 100)
      .map(mapper);
  }
  return [] as rawCardType[];
};
