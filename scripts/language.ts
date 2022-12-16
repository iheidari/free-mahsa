import { writeFile } from "fs/promises";
import { translationType } from "../i18n/types";
import { readNameFile } from "../scripts/util";
import { nameMapping } from "./mappings/mappingFa";
import { nameType } from "./types";
import all from "../data/output.json";
import { parse } from "json2csv";

const importer = async () => {
  const rawNames = await readNameFile();
  const names = rawNames.map((name: nameType) => {
    return {
      nameFa: nameMapping(name.nameFa),
      nameEn: name.nameEn?.trim(),
    };
  });

  const currentName = all.map((item) => item.name);
  currentName.forEach((name) => {
    if (names.findIndex((n) => n.nameFa == name) === -1) {
      names.push({
        nameFa: name,
        nameEn: undefined,
      });
    }
  });

  const translateName = names.reduce((acc: translationType, cur) => {
    if (!acc[cur.nameFa]) {
      acc[cur.nameFa] = { en: cur.nameEn };
    }
    return acc;
  }, {});

  await writeFile("./i18n/names.json", JSON.stringify(translateName, null, 2));
  console.log(`Write ${names.length} names to names.json`);
  const csv = parse(names, { fields: ["nameFa", "nameEn"] });
  await writeFile("./data/names.csv", csv);
};

importer();
