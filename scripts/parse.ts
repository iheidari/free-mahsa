import { writeFile } from "fs";
import mapper from "./mapping";
import { readDataCsvFile } from "./util";

const convert = async () => {
  let all = await readDataCsvFile();
  console.log("🚀 ~ jsonArray", all.length);
  all = all.filter((data) => data.name);
  console.log("🚀 ~ non empty rows(with name): ", all.length);
  all = all.map(mapper);

  writeFile("./data/output.json", JSON.stringify(all), () =>
    console.log(`${all.length} items parsed successfully`)
  );
};

convert();
