import Card from "./Card";

type CardsProps = {
  rawData: any;
};

const Cards = ({ rawData }: CardsProps) => {
  const components = rawData.map((card: any) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className={`flex gap-16  flex-wrap justify-center`}>{components}</div>
  );
};

export default Cards;
