import provinces from "../../fixtures/provinces";
import data from "../../data/output.json";

export const getProvinceCount = (provinceCode: string) => {
  const province = provinces.find((p) => p.code === provinceCode);
  return data.filter((item) => item.province == province?.nameFa).length;
};
