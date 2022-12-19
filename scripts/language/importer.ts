import { writeFile } from "fs/promises";
import { translationType } from "../../i18n/types";
import { readTranslateCsvFile } from "../util";
import { detailsMapping, nameMapping } from "../mappings/mappingFa";
import { nameType } from "../types";
import all from "../../data/output.json";
import { parse } from "json2csv";

const importer = async () => {
  await importerName();
  await importerDetails();
};

const importerName = async () => {
  // Read new CSV file for translated Names
  const rawNames = await readTranslateCsvFile("names");
  const names = rawNames.map((name: nameType) => {
    return {
      nameFa: nameMapping(name.nameFa),
      nameEn: name.nameEn?.trim(),
    };
  });

  //read currentNames to merge
  const currentName = all.map((item) => item.name);
  // merge current names and new names
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

  // save new names.json for app
  await writeFile("./i18n/names.json", JSON.stringify(translateName, null, 2));
  console.log(`Wrote ${names.length} names to names.json`);
  // create a new CSV file with all names
  const csv = parse(names, { fields: ["nameFa", "nameEn"] });
  await writeFile("./data/names.csv", csv);
};

const importerDetails = async () => {
  // Read new CSV file for translated Names
  const rawDetails = await readTranslateCsvFile("details");
  // map to translation format
  const details = rawDetails.map((detail: nameType) => {
    return {
      nameFa: detailsMapping(detail.nameFa),
      nameEn: detail.nameEn?.trim(),
    };
  });

  //import all details and remove the duplicates
  const currenttDetails = all
    // import all details
    .map((item) => item.details)
    // remove duplicates
    .reduce((acc: string[], cur: string) => {
      if (!acc.includes(cur.trim())) {
        acc.push(cur.trim());
      }
      return acc;
    }, [])
    // map to translation format
    .map((detail) => ({ nameFa: detail, nameEn: "" }));

  //merge current and new ones
  currenttDetails.forEach((detail) => {
    if (details.findIndex((n) => n.nameFa == detail.nameFa) === -1) {
      details.push({
        nameFa: detail.nameFa,
        nameEn: undefined,
      });
    }
  });

  // merge current names and new names
  const translateDetails = details.reduce((acc: translationType, cur) => {
    if (!acc[cur.nameFa]) {
      acc[cur.nameFa] = { en: cur.nameEn };
    }
    return acc;
  }, {});

  // save new names.json for app
  await writeFile(
    "./i18n/details.json",
    JSON.stringify(translateDetails, null, 2)
  );
  console.log(`Wrote ${details.length} details to details.json`);

  const csv = parse(details, { fields: ["nameFa", "nameEn"] });
  await writeFile("./data/details.csv", csv);
};

importer();
