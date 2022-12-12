import mapperFa from "./mappingFa";
import mapperEn from "./mappingEn";

const mapper = (language: "fa" | "en") => {
  if (language === "en") {
    return mapperEn;
  }
  return mapperFa;
};

export default mapper;
