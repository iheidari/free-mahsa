import Image, { StaticImageData } from "next/future/image";
import Timer, { TimerProps } from "../Timer";
import Tag from "./Tag";

export type CardProps = {
  name: string;
  image: string | StaticImageData;
  timer: TimerProps;
  status: CardStatus;
  link: string;
};

export type CardStatus = "killed" | "prison" | "lost";

const Card = ({ name, image, timer, status, link }: CardProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="text-white bg-red-800 rounded-50p flex relative box-border w-72 h-72 hover:bg-red-700">
        <div className="rounded-50p pb-7 pt-0 py-3 relative flex-1 text-center box-border max-w-full">
          <Image
            alt={name}
            style={{ marginTop: "-36px", overflow: "hidden" }}
            className="w-44 h-44 mx-auto mb-0 overflow-hidden object-center-bottom object-cover rounded-34p relative block"
            src={image}
            width={180}
            height={180}
          />
          <div className="absolute -rotate-45 top-6 -left-1 w-20">
            <Tag status={status} />
          </div>
          <h5 className="text-lg mt-4 mb-4">{name}</h5>
          <Timer timer={timer} />
        </div>
      </div>
    </a>
  );
};

export default Card;
