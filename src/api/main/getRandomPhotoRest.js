import axios from 'axios';

export const getRandomPhotoRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/photos/random',
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
