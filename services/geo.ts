import provinces from "../fixtures/provinces.json";

export const getProvinceCode = (provinceName: string) => {
  const index = provinces.findIndex(
    (province) =>
      province.nameFa === provinceName || province.nameEn == provinceName
  );
  if (index !== -1) {
    return provinces[index].code;
  }
  return "";
};
