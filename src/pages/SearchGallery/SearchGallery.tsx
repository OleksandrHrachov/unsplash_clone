import { useState, useEffect } from "react";
import "./SearchGallery.scss";
import { useParams } from "react-router-dom";
import { IImage } from "../../types";
import { searchImages } from "../../services/api";
import { CardsList } from "../../components/CardsList";
import { Button } from "../../components/Button";

export const SearchGallery = () => {
  const { query } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState<IImage[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = async () => {
    const pageNumber = currentPage + 1;
    setIsLoading(true);
    try {
      const res = await searchImages(query, pageNumber);
      setImages([...images, ...res]);
      setCurrentPage(pageNumber);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const initImageLoader = async () => {
    setIsLoading(true);
    try {
      const res = await searchImages(query);
      setImages([...images, ...res]);
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

  return (
    <div className="gallery">
      {isLoading ? (
        <h2>LOADING...</h2>
      ) : (
        <>
          <CardsList cardsList={images} />
          <div className="gallery__load-more-btn">
            <Button title="LOAD MORE" handlerClick={loadMore} />
          </div>
        </>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
};
