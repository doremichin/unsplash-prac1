import axios from 'axios';

export const searchPhotosRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/search',
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
