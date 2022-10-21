import Image, { StaticImageData } from "next/future/image";
import React from "react";
import Timer, { TimerProps } from "../Timer";
import Tag from "./Tag";

type CardProps = {
  name: string;
  image: string | StaticImageData;
  timer: TimerProps;
  status: CardStatus;
};

export type CardStatus = "killed" | "prison" | "lost";

const Card = ({ name, image, timer, status }: CardProps) => {
  return (
    <div className="text-white bg-red-800 rounded-50p flex relative box-border w-72 h-72 hover:bg-red-700">
      <div className="rounded-50p pb-7 pt-0 py-3 relative flex-1 text-center box-border max-w-full">
        <Image
          alt=""
          style={{ marginTop: "-36px", overflow: "hidden" }}
          className="w-44 h-44 mx-auto mb-0 overflow-hidden object-center-bottom object-cover rounded-34p relative block"
          src={image}
          width={180}
          height={180}
        />
        <div className="absolute -rotate-90 top-16 -left-1 w-16">
          <Tag status={status} />
        </div>
        <h5 className="text-lg mt-4 mb-4">{name}</h5>
        <Timer timer={timer} />
      </div>
    </div>
  );
};

export default Card;
{
  /* <div
      className={`relative h-96 w-72 border-2 rounded  drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)] ${borderColor}`}
    >
      <div className="absolute z-10 bg-black bg-opacity-40 w-full p-2">
        <h2 className="text-lg text-white">{name}</h2>
      </div>
      <Timer timer={timer} />
      <Image
        src={image}
        alt={name}
        layout="responsive"
        height={384}
        width={288}
      />
    </div> */
}
