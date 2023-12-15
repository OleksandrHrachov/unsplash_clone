import { FC } from "react";
import "./CardsColumn.scss";
import { ImageCard } from "../ImageCard";
import { IImage } from "../../types";

interface IProps {
  cards: IImage[];
}

export const CardsColumn: FC<IProps> = ({ cards }) => {
  return (
    <div className="cards-columns">
      {cards.map((image) => {
        return <ImageCard key={image.id} imgData={image} />;
      })}
    </div>
  );
};
