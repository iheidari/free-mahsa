import { useEffect, useState } from "react";
import Card, { CardProps, CardStatus } from "./Card";
import { convert } from "./util";

type CardsProps = {
  rawData: any;
};

const Cards = ({ rawData }: CardsProps) => {
  const [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      const timeMs = new Date().getTime();
      setTime(timeMs);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data: CardProps[] = rawData.map((d: any) => convert(d));

  const components = data.map((card) => {
    return (
      <Card
        key={card.name}
        name={card.name}
        image={`${card.image}`}
        timer={{
          seconds: Math.floor(
            (time - new Date(card.timer.seconds).getTime()) / 1000
          ),
          text: card.timer.text,
        }}
        status={card.status as CardStatus}
        link={card.link}
      />
    );
  });
  return (
    <div className={`flex gap-16  flex-wrap justify-center`}>{components}</div>
  );
};

export default Cards;
