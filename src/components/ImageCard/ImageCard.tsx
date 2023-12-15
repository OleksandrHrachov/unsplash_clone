import  { FC } from "react";
import "./ImageCard.scss";
import { IImage } from "../../types";
import { Link, useLocation } from "react-router-dom";


interface IProps {
  imgData: IImage;
}

export const ImageCard: FC<IProps> = ({ imgData }) => {
  const {pathname} = useLocation();

  return (
    <Link to={`/photo/${imgData.id}`} state={{prevLocation: pathname}} className="card">
      <img className="card__image" src={imgData.urls.small} />
      <div className="card__image-info">
        <img className="card__image-info-creator-photo" src={imgData.user.profile_image.small} />
        <span className="card__image-info-creator-name">
          {imgData.user.name}
        </span>
      </div>
    </Link>
  );
};
