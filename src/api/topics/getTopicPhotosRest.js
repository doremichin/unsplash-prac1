import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const getTopicPhotosRest = async ({ slug, page }) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: `/topics/${slug}/photos`,
      method: 'get',
      params: {
        page,
        client_id: process.env.REACT_APP_ACCESS_KEY,
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};
