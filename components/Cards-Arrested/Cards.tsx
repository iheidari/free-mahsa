import Card from "./Card";

export type rawCardType = {
  id: number;
  name: string;
  status?: string;
  city?: string;
  details?: string;
  type?: string;
};

type CardsProps = {
  rawData: rawCardType[];
};

const Cards = ({ rawData }: CardsProps) => {
  const components = rawData.map((card: any) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className={`flex gap-16  flex-wrap justify-center mt-16`}>
      {components}
    </div>
  );
};

export default Cards;
