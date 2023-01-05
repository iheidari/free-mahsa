import { writeFile } from "fs/promises";
import { parse } from "json2csv";
import { convertAge, convertKilledDate } from "./util/convert";
import { readKilledCsvFile } from "./util/csv";

const readKilled = async () => {
  let raw = await readKilledCsvFile();

  const all = raw.map((item) => ({
    ...item,
    killedDate: convertKilledDate(item.killedDate),
    age: convertAge(item.age),
  }));

  const csv = parse(all, {
    fields: ["name", "age", "city", "killedDate", "reason", "details"],
  });
  await writeFile(`./data/killed-new.csv`, csv);
};

readKilled();
