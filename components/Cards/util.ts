import { CardProps } from "./Card";
export const convert = (data: any): CardProps => {
  return {
    name: data.nameFa,
    image: data.images[0].asset.url,
    timer: {
      seconds: data.status === "killed" ? data.birthDate : data.arrestDate,
      text: data.sloganFa,
    },
    status: data.status,
    link: data.urls?.length ? data.urls[0] : "#",
  };
};
