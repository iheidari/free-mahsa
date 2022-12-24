import { IData } from "./types";
import cities from "../fixtures/cities.json";
import nameMapping from "../fixtures/name-mapping.json";
import cityMapping from "../fixtures/city-mapping.json";
import detailsMapping from "../fixtures/details-mapping.json";

const mapper = (input: IData, index: number) => {
  const city = cityMapper(input);
  const province = cities.find((cp) => cp.nameFa == city)?.provinceCode ?? "";
  return {
    id: index,
    name: nameMapper(input.name),
    city,
    province,
    status: statusMapping(input),
    type: typeMapping(input),
    details: detailsMapper(input.details),
  };
};

export const nameMapper = (name: string, _rawData?: IData): string => {
  if ((nameMapping as any)[name.trim()]) {
    return (nameMapping as any)[name.trim()];
  }
  return name.trim();
};

const statusMapping = (rawData: IData) => {
  switch (rawData.status) {
    case "آزاد شد با وثیقه":
    case "آزادی با وثیقه":
    case "با وثیقه آزاد شد":
      return "آزادی با وثیقه";

    case "آزد شد":
    case "ازاد شد":
    case "آزاد شد":
      return "آزاد شد";

    case "مفقود":
    case "ناپدید":
      return "ناپدید";
    case "زندانی":
    case "بازداشت شد":
      return "زندانی";
    default: {
      console.warn(`No map for ${rawData.name} status: ${rawData.status}`);
      return "زندانی";
    }
  }
};

const cityMapper = (rawData: IData) => {
  if (!rawData.city) {
    switch (rawData.name.trim()) {
      case "کامران ساختمانگر":
        return "سقز";
      case "سارا کریمی":
      case "غزاله رضازاده":
      case "محدثه همافرد":
      case "احسان پیربرناش":
      case "محمد حسین همت پور":
      case "محمدحسین همت پور":
      case "مینا جندقی":
      case "ضیا صدر":
        return "تهران";
      case "یوسف گرامی‌پور":
        return "سنندج";
    }
  }
  if ((cityMapping as any)[rawData.city.trim()]) {
    return (cityMapping as any)[rawData.city.trim()];
  }
  return rawData.city.trim();
};

const typeMapping = (rawData: IData) => {
  return rawData.type;
};

export const detailsMapper = (details: string, _rawData?: IData) => {
  if ((detailsMapping as any)[details.trim()]) {
    return (detailsMapping as any)[details.trim()];
  }
  return details.trim();
};

export default mapper;
