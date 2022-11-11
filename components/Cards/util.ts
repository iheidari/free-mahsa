import { CardProps } from "./Card";
export const convert = (data: any): CardProps => {
  const seconds = new Date(getCorrectTime(data)).setSeconds(
    Math.floor(Math.random() * 60)
  );
  const slogan = getSlogan(data);
  const image =
    (data.images && data.images[0].asset.url) ||
    (data.status === "killed" ? "/images/free.jpg" : "/images/arrested.jpg");
  return {
    name: data.nameFa,
    image: image,
    timer: {
      seconds: seconds,
      text: slogan,
    },
    status: data.status,
    link: data.urls?.length ? data.urls[0] : "",
  };
};

const getCorrectTime = (data: any): Date => {
  if (data.status === "killed") {
    if (data.birthDate) {
      return data.birthDate;
    }
    return data.killedDate;
  }
  return data.arrestDate;
};
const getSlogan = (data: any) => {
  if (data.sloganFa) {
    return data.sloganFa;
  }
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

export const shuffle = (inputArray: any) => {
  let array = [...inputArray];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
