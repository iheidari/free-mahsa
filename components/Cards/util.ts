import { CardProps } from "./Card";
export const convert = (data: any): CardProps => {
  const seconds = getCorrectTime(data);
  const slogan = getSlogan(data);
  const image =
    (data.images && data.images[0].asset.url) ||
    (data.status === "killed" ? "/images/free.jpg" : "/images/arrested.jpg");
  return {
    name: data.nameFa,
    image: image,
    timer: {
      seconds,
      text: slogan,
    },
    status: data.status,
    link: data.urls?.length ? data.urls[0] : "#",
  };
};

const getCorrectTime = (data: any) => {
  if (data.status === "killed") {
    if (data.birthDate) {
      return data.birthDate;
    }
    return data.killedDate;
  }
  return data.arrestDate;
};
const getSlogan = (data: any) => {
  if (data.status === "killed") {
    if (data.birthDate) {
      return `${data.nameFa} امروز چند ساله بود؟`;
    }
    return `چند وقته ${data.nameFa} از پیشمون رفته؟`;
  }
  if (data.status === "lost") {
    return `چند وقته از ${data.nameFa} خبر نداریم؟`;
  }
  return `چند وقته ${data.nameFa} آزاد نیست؟`;
};
