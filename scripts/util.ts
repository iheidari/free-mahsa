import csv from "csvtojson";

export const readFile = async (language: string) => {
  let all = await csv().fromFile(`./data/${language}.csv`);
  const keys = Object.keys(all[0]);
  checkKeys(language, keys);
  all = all.map((item) => ({
    name: item[keys[0]],
    city: item[keys[1]],
    status: item[keys[2]],
    type: item[keys[3]],
    details: item[keys[4]],
  }));
  return all;
};
function checkKeys(language: string, keys: string[]) {
  if (
    language === "fa" &&
    (keys[0] !== "ّنام و نام خانوادگی" ||
      keys[1] !== "شهر" ||
      keys[2] !== "وضعیت آزادی/ زندانی" ||
      keys[3] !== "نوع فعالیت" ||
      keys[4] !== "توضیحات بیشتر")
  ) {
    console.warn("Keys does not match(fa)");
  }
  if (
    language === "en" &&
    (keys[0] !== "ّFirst & Last name" ||
      keys[1] !== "Place of Arrest" ||
      keys[2] !== "Current Status" ||
      keys[3] !== "Type of Activity" ||
      keys[4] !== "Details")
  ) {
    console.warn("Keys does not match(en)");
  }
}
