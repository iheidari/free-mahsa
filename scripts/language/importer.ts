import { writeFile } from "fs/promises";
import { translationType } from "../../i18n/types";
import { readTranslateCsvFile } from "../util";
import { detailsMapper, nameMapper } from "../mapping";
import { translateType } from "../types";
import all from "../../data/output.json";
import { parse } from "json2csv";

const importer = async () => {
  await importField("name", nameMapper);
  await importField("details", detailsMapper);
};

const importField = async (
  field: "details" | "name",
  mapper: (item: string) => string
) => {
  // Read new translated CSV file
  const rawField = await readTranslateCsvFile(field);
  // map to translation format
  const csvField: translateType[] = rawField.map((item: translateType) => {
    return {
      fa: mapper(item.fa),
      en: item.en?.trim(),
    };
  });

  //import all and remove the duplicates
  const dataField: translateType[] = all
    // import all
    .map((item) => item[field])
    // remove duplicates
    .reduce((acc: string[], cur: string) => {
      if (!acc.includes(cur.trim())) {
        acc.push(cur.trim());
      }
      return acc;
    }, [])
    // map to translation format
    .map((item: string) => ({ fa: item, en: "" }));

  //merge current and new ones
  dataField.forEach((item) => {
    if (csvField.findIndex((n) => n.fa == item.fa) === -1) {
      csvField.push({
        fa: item.fa,
        en: undefined,
      });
    }
  });

  // convert to translation JSON format
  const translatedJson = csvField.reduce((acc: translationType, cur) => {
    if (!acc[cur.fa]) {
      acc[cur.fa] = { en: cur.en };
    }
    return acc;
  }, {});

  // save new json file for app
  await writeFile(
    `./i18n/${field}.json`,
    JSON.stringify(translatedJson, null, 2)
  );
  console.log(`Wrote ${csvField.length} to ${field}.json`);

  const csv = parse(csvField, { fields: ["nameFa", "nameEn"] });
  await writeFile(`./data/${field}-new.csv`, csv);
};

importer();
