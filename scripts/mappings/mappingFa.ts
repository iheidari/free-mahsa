import { IData } from "../types";
import cities from "../../fixtures/cities";

const mapper = (input: IData, index: number) => {
  const city = cityMapping(input);
  const province = cities.find((cp) => cp.nameFa == city)?.provinceCode ?? "";
  return {
    id: index,
    name: nameMapping(input.name),
    city,
    province,
    status: statusMapping(input),
    type: typeMapping(input),
    details: input.details,
  };
};

export const nameMapping = (name: string, _rawData?: IData): string => {
  switch (name.trim()) {
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
    case "اکبر سیدی ‌ ‎":
      return "اکبر سیدی";
    case "جلیل سلیمان پور ‎":
      return "جلیل سلیمان پور";
    case "صادق دشتک‌‌ ‎":
      return "صادق دشتک‌‌";
    case "محمد نظریان ‎":
    case "محمد نظریان   ‎":
      return "محمد نظریان";
    case "نیلوفر فتحی ‌‎":
      return "نیلوفر فتحی";
    case "‏سارا هادیان":
      return "سارا هادیان";
    case "‏امیرحمزه براهویی":
      return "امیرحمزه براهویی";
    case "حشم دار ‎":
      return "حشم دار";
    case "محمدسعید امیری⁩":
      return "محمدسعید امیری";
    case "‏زهرا نظری گمیشانی":
      return "زهرا نظری گمیشانی";
    case "‌‎نیما مهین بخت":
      return "‌نیما مهین بخت";
    case "‎پگاه شهوندی":
      return "پگاه شهوندی";
    case "( اسم) نگهدار هلر.":
    case "( اسم) نگهدار هلر":
      return "نگهدار هلر";
    case "‌ بردیا تاجدینی":
      return "بردیا تاجدینی";
    case "وحید علی قلی پو":
      return "وحید علی قلی پور";
    case "رسلان محمودی":
      return "ارسلان محمودی";
    case "ونس اصلمرز":
      return "یونس اصلمرز";
    case "ارمین الماسی":
      return "آرمین الماسی";
    case "ارمین کریمی":
      return "آرمین کریمی";
    case "مونا بروزیی":
      return "مونا برزویی";
    case "شفق دریوشی":
      return "شفق درویشی";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    default:
      return name.trim();
  }
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

const cityMapping = (rawData: IData) => {
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
    case "اسلام‌شهر":
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
    case "آذربايجان شرقي":
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
    case "اسلام‌ آباد":
      return "اسلام‌ آباد غرب";
    case "گنبدکاووس":
      return "گنبد کاووس";
    case "نجف آباد اصفهان":
      return "نجف آباد";
    case "نوراباد":
    case "نورآباد":
    case "نور آباد":
      return "نورآباد ممسنی";
    case "بوجنورد":
      return "بجنورد";
    case "دره شهر ایلام":
      return "دره شهر";
    case "روستای چهاب (نام محلی: چهو) از توابع کهگیلویه":
    case "روستای چهاب (نام محلی: چهو)":
      return "روستای چهاب";
    case "لواسان تهران":
      return "لواسان";
    case "گيلان":
      return "گیلان";
    case "چهارمحال وبختياري":
    case "چهار محال":
      return "چهارمحال و بختیاری";
    case "مياندوآب":
      return "میاندوآب";
    case "میرجاه":
      return "میرجاوه";
    case "خمينی شهر":
      return "خمینی شهر";
    default:
      return rawData.city.trim();
  }
};

const typeMapping = (rawData: IData) => {
  return rawData.type;
  // switch(rawData){
  //   case
  // }
};

export default mapper;
