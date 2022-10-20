import Image, { StaticImageData } from "next/image";
import React from "react";
import Timer, { TimerProps } from "../Timer";

type CardProps = {
  name: string;
  image: string | StaticImageData;
  timer: TimerProps;
  status: "alive" | "not-alive";
};

const Card = ({ name, image, timer, status }: CardProps) => {
  const borderColor =
    status === "alive" ? "border-green-400" : "border-red-600";
  return (
    <div
      className={`relative h-96 w-72 border-2 rounded drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)] ${borderColor}`}
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
    </div>
  );
};

export default Card;
