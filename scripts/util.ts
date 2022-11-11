import csv from "csvtojson";

export const readFile = async () => {
  let all = await csv().fromFile("./data/list.csv");
  all = all.map((item) => ({
    name: item["نام"],
    city: item["شهر"],
    status: item["وضعیت آزادی/ زندانی"],
    type: item["نوع فعالیت"],
    details: item["توضیحات بیشتر"],
  }));
  return all;
};
