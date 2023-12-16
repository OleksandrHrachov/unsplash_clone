import { FC } from "react";
import "./ImageCard.scss";
import { IImage } from "../../types";
import { Link, useLocation } from "react-router-dom";
import like from "../../assets/icons/like.svg";

interface IProps {
  imgData: IImage;
}

export const ImageCard: FC<IProps> = ({ imgData }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={`/photo/${imgData.id}`}
      state={{ prevLocation: pathname }}
      className="card"
    >
      <div className="card__image-info">
        <div className="card__image-info-creator">
          <img
            className="card__image-info-creator-photo"
            src={imgData.user.profile_image.small}
          />
          <span className="card__image-info-creator-name">
            {imgData.user.name}
          </span>
        </div>
        <div className="card__image-info-likes-info">
          <img className="card__image-info-likes-img" src={like} alt="like" />
          <span>{imgData.likes}</span>
        </div>
      </div>
      <img className="card__image" src={imgData.urls.small} />
    </Link>
  );
};
