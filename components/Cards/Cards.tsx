import { useEffect, useState } from "react";
import Card, { CardStatus } from "./Card";
import data from "./info.json";

const Cards = () => {
  const [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const components = data.map((card) => {
    return (
      <Card
        key={card.name}
        name={card.name}
        image={`/images/${card.image}`}
        timer={{
          seconds: Math.floor(
            (time - new Date(card.timer.start).getTime()) / 1000
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
