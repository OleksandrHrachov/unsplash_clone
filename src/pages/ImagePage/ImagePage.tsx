import { useState, useEffect } from "react";
import "./ImagePage.scss";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import closeIcon from "../../assets/icons/icon-close.svg";
import { Button } from "../../components/Button";
import { IOneImage } from "../../types/imageType";
import { downloadImage, getImageById } from "../../services/api";

export const ImagePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {state} = useLocation();
  const {prevLocation} = state;

  const [imageData, setImageData] = useState<IOneImage | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadImageData = async () => {
    setIsLoading(true);
    try {
      if (id) {
        const resp = await getImageById(id);
        setImageData(resp);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadImageData();
  }, []);

  const handlerSubmit = async (tag: string) => {
    const trimString = tag.trim();
    const query = trimString.split(' ').join('-');
    if (trimString) {
      navigate(`/search/${query}`)
    }
  };

  useEffect(() => {
    if (imageData?.links.download_location) {
      downloadImage(imageData.id, imageData.links.download_location);
    }
  }, [imageData]);

  const goBack = () => {
    navigate(prevLocation);
  };

  const date = imageData && new Date(imageData.created_at);
  const formattedDate =
    date &&
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const tags: string[] = [];
  imageData &&
    imageData.tags.forEach((obj) => {
      tags.push(obj.title);
    });

  return (
    <div className="image-page" onClick={goBack}>
      <Link to="/" className="image-page__close-link">
        <img className="image-page__close-icon" src={closeIcon} alt="X" />
      </Link>
      <div className="image-page__inner" onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <h2>LOADING...</h2>
        ) : (imageData &&
          <>
            <div className="image-page__header">
              <div className="image-page__header-info">
                <img
                  className="image-page__header-info-creator-photo"
                  src={imageData.user.profile_image.small}
                />
                <span className="image-page__header-info-creator-name">
                  {imageData.user.name}
                </span>
              </div>
              <div className="image-page__header-download-btn"></div>
            </div>
            <div className="image-page__main">
              <div className="image-page__image-wrapper">
                <img
                  className="image-page__image"
                  alt={imageData.alt_description}
                  src={imageData.urls.small}
                />
              </div>
              <div className="image-page__image-info">
                <p className="image-page__image-date">
                  Published: {formattedDate}
                </p>
                <p className="image-page__image-descr">
                  {imageData.description}
                </p>
                <div className="image-page__image-tags">
                  
                  <div className="image-page__image-tags-btns">
                    {tags.map((tag, index) => {
                      return (
                        <Button
                          key={tag + index}
                          variant="tag"
                          title={tag}
                          handlerClick={() => handlerSubmit(tag) }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {error && <h2>{error}</h2>}
      </div>

      
    </div>
  );
};
