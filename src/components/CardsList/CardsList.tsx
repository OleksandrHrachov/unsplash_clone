import { FC, useMemo } from "react";
import "./CardsList.scss";
import { CardsColumn } from "../CardsColumn";
import { IImage } from "../../types";
import {useAppSelector} from '../../hook';

interface IProps {
  cardsList: IImage[];
}

export const CardsList: FC<IProps> = ({ cardsList }) => {
  const {columnsCount} = useAppSelector(state => state.viewSlice);

  const cardsGroupsLists = useMemo(() => {
    const result = [];
    const step = cardsList.length / columnsCount;

    for (let i = 0; i < columnsCount; i++) {
      const slice = cardsList.slice(i * step, step * (i + 1));
      result.push(slice);
    }

    return result;
  }, [cardsList, columnsCount]);

  return (
    <div
      className={`cards-list__images-wrapper cards-list__images-wrapper--${columnsCount}-columns`}
    >
      {cardsGroupsLists.map((group, idx) => {
        return <CardsColumn key={idx} cards={group}/>
      })}
    </div>
  );
};
