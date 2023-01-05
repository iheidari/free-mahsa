import { toGregorian } from "../../services/jalali";

export const convertNumbers2English = (number: string) => {
  return number.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (c) =>
    (c.charCodeAt(0) & 0xf).toString()
  );
};

export const convertAge = (age: string): number | undefined => {
  if (age) {
    return parseInt(convertNumbers2English(age.replace("ساله", "").trim()));
  }
  return undefined;
};

export const convertKilledDate = (date: string): string | undefined => {
  if (!date) {
    return undefined;
  }

  const parts = convertNumbers2English(date.replace("تاریخ تدفین: ", "")).split(
    " "
  );
  const gregorian = toGregorian(
    parseInt(parts[2]),
    parts[1],
    parseInt(parts[0])
  );
  if (gregorian?.date) {
    return `${gregorian.date.getFullYear()}-${
      gregorian.date.getMonth() + 1
    }-${gregorian.date.getDate()}`;
  }
  return undefined;
};
