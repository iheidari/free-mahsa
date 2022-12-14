import { useEffect, useState } from "react";
import useTranslate from "../../hooks/useTranslate";
import Card, { CardProps, CardStatus } from "./Card";
import { convert, shuffle } from "./util";

type CardsProps = {
  rawData: any;
};

const Cards = ({ rawData }: CardsProps) => {
  const { isLatin } = useTranslate();
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeMs = new Date().getTime();
      setTime(timeMs);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    setData(
      shuffle(rawData)
        .sort((a, b) => (a.promote === b.promote ? 0 : a.promote ? -1 : 1))
        .map((d: any) => convert(isLatin)(d))
    );
  }, [rawData]);

  const timeZoneOffset = (new Date().getTimezoneOffset() + 3.5 * 60) * 60;
  const components = data.map((card) => {
    return (
      <Card
        key={card.name}
        name={card.name}
        image={`${card.image}`}
        timer={{
          seconds: time
            ? Math.floor(
                (time - new Date(card.timer.seconds).getTime()) / 1000
              ) + timeZoneOffset
            : 0,
          text: card.timer.text,
        }}
        status={card.status as CardStatus}
        link={card.link}
      />
    );
  });
  return (
    <div className={`flex gap-16  flex-wrap justify-center mt-16`}>
      {components}
    </div>
  );
};

export default Cards;
