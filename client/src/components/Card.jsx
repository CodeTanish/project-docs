import Image from "./Image";
import { data } from "../data/data";
import { useEffect, useState } from "react";

export default function () {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {cards.map((card) => (
        <Image
          key={card.id}
          src={card.image}
          title={card.title}
          tag={card.title}
        />
      ))}
    </div>
  );
}
