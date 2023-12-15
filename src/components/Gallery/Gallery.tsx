import { useEffect, useState } from "react";
import "./Gallery.scss";
import { IImage } from "../../types";
import { CardsList } from "../CardsList";
import { Button } from "../Button";
import { loadImages } from "../../services/api";

const mockedImages = [
  {
    id: "YpUFf0kOWQ0",
    slug: "an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
    created_at: "2023-04-28T13:09:43Z",
    updated_at: "2023-12-15T00:31:48Z",
    promoted_at: null,
    width: 8640,
    height: 5760,
    color: "#a6a68c",
    blur_hash: "LAI#fCx[8wVsVstQx]R+a}t7R*oL",
    description: "Red Necked Ostrich, Nature Reserve – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
    alt_description: "an ostrich looking at the camera with a blurry background",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1682687220945-922198770e60?ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw&ixlib=rb-4.0.3&q=85",
      regular: "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw&ixlib=rb-4.0.3&q=80&w=1080",
      small: "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw&ixlib=rb-4.0.3&q=80&w=400",
      thumb: "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw&ixlib=rb-4.0.3&q=80&w=200",
      small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687220945-922198770e60"
    },
    links: {
      self: "https://api.unsplash.com/photos/an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
      html: "https://unsplash.com/photos/an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
      download: "https://unsplash.com/photos/YpUFf0kOWQ0/download?ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw",
      download_location: "https://api.unsplash.com/photos/YpUFf0kOWQ0/download?ixid=M3w1NDA3Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjYyMDQ4MHw"
    },
    likes: 267,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515659&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
        "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515862&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
      ],
      tagline: "Made to Change",
      tagline_url: "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
      sponsor: {
        id: "mYizSrdJkkU",
        updated_at: "2023-12-14T20:47:07Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 0,
        total_photos: 202,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null
        }
      }
    },
    topic_submissions: {},
    user: {
      id: "mYizSrdJkkU",
      updated_at: "2023-12-14T20:47:07Z",
      username: "neom",
      name: "NEOM",
      first_name: "NEOM",
      last_name: null,
      twitter_username: "neom",
      portfolio_url: "http://www.neom.com",
      bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
      location: "NEOM, Saudi Arabia",
      links: {
        self: "https://api.unsplash.com/users/neom",
        html: "https://unsplash.com/@neom",
        photos: "https://api.unsplash.com/users/neom/photos",
        likes: "https://api.unsplash.com/users/neom/likes",
        portfolio: "https://api.unsplash.com/users/neom/portfolio",
        following: "https://api.unsplash.com/users/neom/following",
        followers: "https://api.unsplash.com/users/neom/followers"
      },
      profile_image: {
        small: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
        medium: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
        large: "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      instagram_username: "discoverneom",
      total_collections: 7,
      total_likes: 0,
      total_photos: 202,
      total_promoted_photos: 72,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "discoverneom",
        portfolio_url: "http://www.neom.com",
        twitter_username: "neom",
        paypal_email: null
      }
    }
  },
]

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState<IImage[] | []>([]);
  // const [images, setImages] = useState<IImage[] | []>(mockedImages);
  const [columns, setColumns] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeColumns = (count: number) => {
    setColumns(count);
  };

  const loadMore = async () => {
    const pageNumber = currentPage + 1;
    setIsLoading(true);
    const res = await loadImages(pageNumber, 15);
    if (typeof res !== "string") {
      setImages([...images, ...res]);
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
      setImages([...images, ...res]);
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
          <div className="gallery__template-btns">
            <Button title="3 col" handlerClick={() => onChangeColumns(3)} />
            <Button title="5 col" handlerClick={() => onChangeColumns(5)} />
          </div>
          <CardsList cardsList={images} columnsCount={columns} />
          <div className="gallery__load-more-btn">
            <Button title="LOAD MORE" handlerClick={loadMore} />
          </div>
        </>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
};
