import { useNavigate } from "react-router-dom";
import Image from "./Image";
import { data } from "../data/data";
import { useEffect, useState } from "react";

export default function Card() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => navigate(`/learn/${card.title.toLowerCase()}`)} 
          className="cursor-pointer"
        >
          <Image
            src={card.image}
            title={card.title}
            tag={card.title}
          />
        </div>
      ))}
    </div>
  );
}
