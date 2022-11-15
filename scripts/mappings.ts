import { IData } from "./types";
import cityProvince from "../fixtures/city-province";

export const mapper = (input: IData, index: number) => {
  const city = cityMapping(input);
  const province = cityProvince.find((cp) => cp.city == city)?.province ?? "";
  return {
    id: index,
    name: nameMapping(input),
    city,
    province,
    status: statusMapping(input),
    type: input.type,
    details: input.details,
  };
};

export const nameMapping = (rawData: IData) => {
  switch (rawData.name) {
    case "سجاد رحمانی⁩":
      return "سجاد رحمانی";
    case "حسین مومنی⁩":
      return "حسین مومنی";
    case "‏کوشیار نوشادی":
      return "کوشیار نوشادی";
    case "محمد رضا مسعودی⁩":
      return "محمد رضا مسعودی";
    case "مهران رزمان⁩":
      return "مهران رزمان";
    case "اکبر سیدی ‌  ‎":
      return "اکبر سیدی";
    case "جلیل سلیمان پور   ‎":
      return "جلیل سلیمان پور";
    case "صادق دشتک‌‌   ‎":
      return "صادق دشتک‌‌";
    case "محمد نظریان   ‎":
      return "محمد نظریان";
    case "نیلوفر فتحی  ‌‎":
      return "نیلوفر فتحی";
    case "‏سارا هادیان":
      return "سارا هادیان";
    case "‏امیرحمزه براهویی":
      return "امیرحمزه براهویی";
    case "حشم دار   ‎":
      return "حشم دار";
    case "":
      return "";
    case "":
      return "";

    default:
      return rawData.name.trim();
  }
};

export const statusMapping = (rawData: IData) => {
  switch (rawData.status) {
    case "آزاد شد با وثیقه":
    case "آزادی با وثیقه":
    case "با وثیقه آزاد شد":
      return "آزادی با وثیقه";

    case "آزد شد":
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
    case "گنبدکاووس":
      return "گنبد کاووس";
    case "نجف آباد اصفهان":
      return "نجف آباد";
    case "":
      return "";
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
