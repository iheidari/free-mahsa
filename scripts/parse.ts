import csv from "csvtojson";
import { writeFile } from "fs";
import { mapper } from "./mappings";

const convert = async () => {
  let all = await csv().fromFile("./data/list.csv");
  console.log("🚀 ~ jsonArray", all.length);
  all = all.filter((data) => data.name);
  console.log("🚀 ~ removeEmptyRows", all.length);
  all = all.map(mapper);

  writeFile("./data/output.json", JSON.stringify(all), () =>
    console.log("done")
  );
};

convert();
