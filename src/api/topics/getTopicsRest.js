import axios from 'axios';

export const getTopicsRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/topics',
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
