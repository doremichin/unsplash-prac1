import axios from 'axios';

export const getPhotosRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/photos',
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
