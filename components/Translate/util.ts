import translation from "../../i18n/translation.json";
import { namespacesType } from "../../i18n/types";
import provinces from "../../fixtures/provinces.json";
import cities from "../../fixtures/cities.json";
import names from "../../i18n/name.json";
import details from "../../i18n/details.json";

export const getTranslate = (
  text: string,
  namespace?: namespacesType,
  locale?: string
) => {
  if (namespace === "province") {
    return getProvinceTranslation(text, locale);
  }
  if (namespace === "city") {
    return getCityTranslation(text, locale);
  }
  if (namespace === "name") {
    return getNameTranslation(text, locale);
  }
  if (namespace === "detail") {
    return getDetailTranslation(text, locale);
  }
  if (
    locale &&
    (translation as any)[text] &&
    ((translation as any)[text] as any)[locale]
  ) {
    return ((translation as any)[text] as any)[locale];
  }
  console.warn(`Couldn't find "${locale}" translation for "${text}"`);
  return text;
};

const getNameTranslation = (text: string, _locale?: string) => {
  if ((names as any)[text] && ((names as any)[text] as any).en) {
    return ((names as any)[text] as any).en;
  }
  console.warn(`Couldn't find translation for name: "${text}"`);
  return text;
};

const getProvinceTranslation = (text: string, _locale?: string) => {
  const index = provinces.findIndex((province) => province.nameFa === text);
  if (index === -1) {
    console.warn(`i18n: Couldn't find province "${text}"`);
    return text;
  }
  return provinces[index].nameEn;
};

const getCityTranslation = (text: string, _locale?: string) => {
  const index = cities.findIndex((city) => city.nameFa === text);
  if (index === -1) {
    console.warn(`i18n: Couldn't find city "${text}"`);
    return text;
  }
  return cities[index].nameEn;
};

const getDetailTranslation = (text: string, _locale?: string) => {
  if ((details as any)[text] && ((details as any)[text] as any).en) {
    return ((details as any)[text] as any).en;
  }
  console.warn(`Couldn't find translation for detail: "${text}"`);
  return text;
};
