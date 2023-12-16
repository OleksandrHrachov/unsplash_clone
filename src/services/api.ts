import axios from "axios";
import { IImage, IUserAuthData } from "../types";
import { IOneImage } from "../types/imageType";

const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const loadImages = async (
  pageNumber = 1,
  count = 30
): Promise<string | IImage[]> => {
  try {
    const response = await API.get(
      `/photos/?client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }&page=${pageNumber}&per_page=${count}`
    );
    return response.data;
  } catch (error) {
    return "Oops! Something went wrong";
  }
};

export const getImageById = async (id: string): Promise<IOneImage> => {
  try {
    const response = await API.get(`/photos/${id}/?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`);

    return response.data;
  } catch (error) {
    throw new Error('Oops! Something went wrong');
  }
}

export const downloadImage = async (id: string, url: string) => {
  try {
    const endpoint = `${url}?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`;
    const response = await axios.get(endpoint);
    const downloadLink = await response.data.url;

    const downloadedImg = await fetch(downloadLink);
    const blob = await downloadedImg.blob();
    const imageUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = id;
    a.innerText = 'DOWNLOAD';

    const downloadBtn = document.querySelector('.image-page__header-download-btn');
    if (downloadBtn && !downloadBtn.innerHTML) {
      downloadBtn.append(a);
    }
  } catch (error) {
    return "Unable to load image";
  }
};

export const searchImages = async (searchParam = '', pageNumber = 1): Promise<IImage[]> => {
  try {
    const response = await API.get(`/search/photos/?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchParam}&page=${pageNumber}&per_page=30`);

    return response.data.results;
  } catch (error) {
    throw new Error('Oops! Something went wrong');
  }
}



export const getAuth = async (authCode: string): Promise<IUserAuthData> => {
  try {
    const resp = await axios({
      method: 'POST',
      url: import.meta.env.VITE_AUTH_TOKEN_URL,
      params: {
        client_id: import.meta.env.VITE_ACCESS_KEY,
        client_secret: import.meta.env.VITE_SECRET_KEY,
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        code: authCode,
        grant_type: 'authorization_code'
      }
    })

    const authData= resp.data;
    const userData = {
      token: authData.access_token,
      userName: authData.username
    };

    localStorage.setItem('authData', JSON.stringify(userData));
    return userData;

  } catch (error) {
    throw new Error('Oops! Something went wrong with registration. Please try later.');
  }
}
