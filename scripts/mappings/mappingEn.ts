import { IData } from "../types";
import cities from "../../fixtures/cities";

const mapper = (input: IData, index: number) => {
  const city = cityMapping(input);
  const province = cities.find((cp) => cp.nameEn == city)?.provinceCode ?? "";
  if (!province && city)
    console.log("🚀 ~ file: mappingEn.ts:12 ~ mapper ~ province", city);

  return {
    id: index,
    name: nameMapping(input),
    city,
    province,
    status: statusMapping(input),
    type: input.type,
    details: input.details,
  };
};

const nameMapping = (rawData: IData) => {
  switch (rawData.name) {
    case "":
      return "";
    default:
      return rawData.name.trim();
  }
};

const statusMapping = (rawData: IData) => {
  switch (rawData.status) {
    case "disappeared":
    case "Missing":
      return "Missing";

    case "He was released on bail":
    case "Released by bail":
      return "Released by bail";

    case "Released":
      return "Released";

    case "imprisoned":
    case "Imprisoned":
      return "Imprisoned";

    default: {
      console.warn(`No map for ${rawData.name} status: ${rawData.status}`);
      return "Imprisoned";
    }
  }
};

const cityMapping = (rawData: IData) => {
  if (!rawData.city) {
    switch (rawData.name.trim()) {
      case "Mohammad Ali Varzideh":
        return "";
      case "Vandad Mohseni":
        return "";
    }
  }

  switch (rawData.city.trim()) {
    case "Devandareh":
    case "Dewandre":
      return "Diwandareh";
    case "Guilan":
      return "Gilan";
    case "Arrested in Gachsaran":
    case "Gach-saran":
      return "Gachsaran";
    case "Baneh":
      return "Bane";
    case "Bandarabbas":
      return "Bandar Abbas";
    case "Boukan":
    case "Buchan":
      return "Bukan";
    case "Dizel Abad Prison":
    case "Fashafouye":
      return "Tehran";
    case "French Citizen":
    case "French Citizen":
      return "-";
    case "Ghasr Shizin":
    case "Qasreshirin":
      return "Qasreshirin";
    case "Gilangarb":
      return "Gilanegharb";
    case "Islamshahr":
      return "Eslamshahr";
    case "Gilangharb":
      return "Gilanegharb";
    case "Gonbad-e Kabos":
      return "Gonbad-e Kavus";
    case "Kamiyaran":
      return "Kamyaran";
    case "Khoi":
      return "Khoy";
    case "Kohgiluyeh and Boyer-Ahmad Province":
    case "Kohkoliyeh and Boyerahmad":
      return "Kohgiloyeh and Boyerahmad";
    case "Langarud":
      return "Langrod";
    case "Mohammad Abbaszadeh": // name
      return "Ilam";
    case "Naqqadeh":
      return "Naghadeh";
    case "Nurabad":
      return "Nourabad";
    case "Owners":
      return "Malekan";
    case "Saqqez":
      return "Saqez";
    case "Western Azerbaijan":
      return "West Azerbaijan";
    case "zahedan":
    case "Zaheden":
      return "Zahedan";
    case "terror":
      return "Dehdasht";
    case "Isfahan":
      return "Esfahan";
    case "Assalooyeh":
      return "Asaluyeh";
    case "Urmia":
      return "Orumieh";
    case "Nourabad":
      return "Noorabad";
    case "Tenkaben":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";
    case "":
      return "";

    default:
      return rawData.city.trim();
  }
};

export default mapper;
