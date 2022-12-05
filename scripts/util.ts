import csv from "csvtojson";

export const readFile = async () => {
  let all = await csv().fromFile("./data/data.csv");
  const keys = Object.keys(all[0]);
  checkKeys(keys);
  all = all.map((item) => ({
    name: item[keys[0]],
    city: item[keys[1]],
    status: item[keys[2]],
    type: item[keys[3]],
    details: item[keys[4]],
  }));
  return all;
};
function checkKeys(keys: string[]) {
  if (
    keys[0] !== "ّنام و نام خانوادگی" ||
    keys[1] !== "شهر" ||
    keys[2] !== "وضعیت آزادی/ زندانی" ||
    keys[3] !== "نوع فعالیت" ||
    keys[4] !== "توضیحات بیشتر"
  ) {
    console.warn("Keys does not match");
  }
}
