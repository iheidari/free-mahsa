import { CardProps } from "./Card";
export const convert =
  (isLatin: boolean) =>
  (data: any): CardProps => {
    const seconds = new Date(getCorrectTime(data)).setSeconds(
      Math.floor(Math.random() * 60)
    );
    const slogan = getSlogan(isLatin)(data);
    const image =
      (data.images && data.images[0].asset.url) ||
      (data.status === "کشته شد" ? "/images/free.jpg" : "/images/arrested.jpg");
    return {
      name: isLatin ? data.nameEn : data.nameFa,
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
  if (data.status === "کشته شد") {
    if (data.birthDate) {
      return data.birthDate;
    }
    return data.killedDate;
  }
  return data.arrestDate;
};
const getFirstName = (name: string) => {
  return name.split(" ")[0];
};
const getSlogan = (isLatin: boolean) => (data: any) => {
  const name = getFirstName(isLatin ? data.nameEn : data.nameFa);

  if (data.status === "کشته شد") {
    if (data.birthDate) {
      return isLatin
        ? `How old was ${name} today?`
        : `${name} امروز چند ساله بود؟`;
    }
    return isLatin
      ? `How long is ${name} not with us?`
      : `چند وقته ${name} از پیشمون رفته؟`;
  }
  if (data.status === "مفقود") {
    return isLatin
      ? `How long is ${name} lost?`
      : `چند وقته از ${name} خبر نداریم؟`;
  }
  return isLatin
    ? `How long is ${name} not free?`
    : `چند وقته ${name} آزاد نیست؟`;
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
