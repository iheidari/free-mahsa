import React from "react";
import profilePic from "../../public/images/nika-shahkarami.webp";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <Card
        name="Mahsa Amini"
        image={profilePic}
        timer={{
          seconds: 16 * 365 * 24 * 60 * 60 + 4635874,
          text: "She was at this age",
        }}
        status="alive"
      />
      <Card
        name="Mahsa Amini"
        image={profilePic}
        timer={{ seconds: 1 * 365 * 24 * 60 * 60 - 4635874, text: "In prison" }}
        status="not-alive"
      />
      <Card
        name="Mahsa Amini"
        image={profilePic}
        timer={{
          seconds: 16 * 365 * 24 * 60 * 60 + 4635874,
          text: "Her age if they let her",
        }}
        status="not-alive"
      />
    </div>
  );
};

export default Cards;
