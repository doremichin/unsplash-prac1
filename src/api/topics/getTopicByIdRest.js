import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const getTopicByIdRest = async (slug) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: `/topics/${slug}`,
      method: 'get',
      params: {
        client_id: process.env.REACT_APP_ACCESS_KEY,
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};
