import { CardProps } from "./Card";
export const convert = (data: any): CardProps => {
  return {
    name: data.nameFa,
    image: data.image1.asset.url,
    timer: {
      seconds: data.isAlive ? data.arrestDate : data.birthDate,
      text: data.sloganFa,
    },
    status: data.isAlive ? "prison" : "killed",
    link: data.url1,
  };
};
