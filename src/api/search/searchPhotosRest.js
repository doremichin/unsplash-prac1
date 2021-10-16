import axios from 'axios';

export const searchPhotosRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/search',
      method: 'get',
      headers: {
        Authorization: 'Client-ID 6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
      },
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
