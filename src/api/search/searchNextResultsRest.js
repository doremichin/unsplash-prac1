import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const searchNextResultsRest = async (searchType, params) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: `/search/${searchType}`,
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
