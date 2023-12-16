import { useState, useEffect } from "react";
import "./SearchGallery.scss";
import { useParams } from "react-router-dom";
import { IImage } from "../../types";
import { searchImages } from "../../services/api";
import { CardsList } from "../../components/CardsList";
import { Button } from "../../components/Button";
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';

export const SearchGallery = () => {
  const { query } = useParams();

  const pageQuery = query?.split('-').join(' ');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState<IImage[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadPrev = async () => {
    if (currentPage === 1) {
      return;
    }
    const pageNumber = currentPage - 1;
    setIsLoading(true);
    const res = await searchImages(query, pageNumber);
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
    const res = await searchImages(query, pageNumber);
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
    try {
      const res = await searchImages(query);
      setImages(res);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initImageLoader();
  }, []);

  useEffect(() => {
    initImageLoader();
  }, [query]);

  return (
    <div className="search-gallery">
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : (
        <>
        <h3 className="search-gallery__title">{pageQuery}</h3>
          <CardsList cardsList={images} />
          <div className="search-gallery__load-more-btn" >
            <Button handlerClick={loadPrev}><img className="search-gallery__btn-arrow" src={leftArrow} alt="<" /></Button>
            <div><strong>{currentPage}</strong></div>
            <Button handlerClick={loadNext}><img className="search-gallery__btn-arrow" src={rightArrow} alt=">" /></Button>
          </div>
        </>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
};
