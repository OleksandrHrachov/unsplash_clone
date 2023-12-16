import { useEffect, useState } from "react";
import "./Gallery.scss";
import { IImage } from "../../types";
import { CardsList } from "../../components/CardsList";
import { Button } from "../../components/Button";
import { loadImages } from "../../services/api";
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState<IImage[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadPrev = async () => {
    if (currentPage === 1) {
      return;
    }
    const pageNumber = currentPage - 1;
    setIsLoading(true);
    const res = await loadImages(pageNumber);
    if (typeof res !== "string") {
      setImages(res);
      setCurrentPage(pageNumber);
    } else {
      setError(res);
    }
    setIsLoading(false);
  };

  const loadNext = async () => {
    const pageNumber = currentPage + 1;
    setIsLoading(true);
    const res = await loadImages(pageNumber);
    if (typeof res !== "string") {
      setImages(res);
      setCurrentPage(pageNumber);
    } else {
      setError(res);
    }
    setIsLoading(false);
  };

  const initImageLoader = async () => {
    setIsLoading(true);
    const res = await loadImages();
    if (typeof res !== "string") {
      setImages(res);
    } else {
      setError(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initImageLoader();
  }, []);

  return (
    <div className="gallery">
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : (
        <>
          <CardsList cardsList={images} />
          <div className="gallery__load-more-btn" >
            <Button handlerClick={loadPrev}><img className="gallery__btn-arrow" src={leftArrow} alt="<" /></Button>
            <div><strong>{currentPage}</strong></div>
            <Button handlerClick={loadNext}><img className="gallery__btn-arrow" src={rightArrow} alt=">" /></Button>
          </div>
        </>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
};
