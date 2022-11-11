import { IData } from "./types";
import cityProvince from "../fixtures/city-province";

export const mapper = (input: IData) => {
  const city = cityMapping(input);
  const province = cityProvince.find((cp) => cp.city == city)?.province ?? "";
  return {
    name: nameMapping(input),
    city,
    province,
    status: statusMapping(input),
    type: input.type,
    details: input.details,
  };
};

export const nameMapping = (rawData: IData) => {
  return rawData.name.trim();
};

export const statusMapping = (rawData: IData) => {
  switch (rawData.status) {
    case "آزاد شد با وثیقه":
      return "آزادی با وثیقه";
    case "آزد شد":
      return "آزاد شد";
    case "مفقود":
      return "ناپدید";
    default:
      return rawData.status.trim();
  }
};

export const cityMapping = (rawData: IData) => {
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

  switch (rawData.city) {
    case "زهدان":
      return "زاهدان";
    case "زندان دیزل‌ آباد":
    case "اوین":
      return "تهران";
    case "بازداشت در گچساران":
      return "گچساران";
    case "حاند کبدانی":
      return "زاهدان";
    case "اسلام شهر":
      return "اسلامشهر";
    case "خرم‌آباد":
      return "خرم آباد";
    case "دهشت":
      return "دهدشت";
    case "سبزاوا":
      return "سبزوار";
    case "سنقز":
      return "سنقر";
    case "قره":
      return "قروه";
    case "قصر شیزین":
    case "قصرشیرین":
      return "قصر شیرین";
    case "کمیاران":
      return "کامیاران";
    case "کرمنشاه":
      return "کرمانشاه";
    case "کهگیلویه و بویراحمد":
      return "کهگیلویه و بویر احمد";
    case "آهواز":
      return "اهواز";
    case "ابادان":
      return "آبادان";
    case "آذرباییجان غربی":
      return "آذربایجان غربی";
    case "آذرباییجان شرقی":
      return "آذربایجان شرقی";
    case "مهباد":
      return "مهاباد";
    case "کچویی":
      return "کرج";
    case "گیلان غرب":
      return "گیلانغرب";
    case "بندرعباس":
      return "بندر عباس";
    case "لواسان  تهران":
      return "لواسان";
    case "میادوآب":
      return "میاندوآب";
    case "اسلام‌آباد غرب":
      return "اسلام‌ آباد";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    default:
      return rawData.city.trim();
  }
};
