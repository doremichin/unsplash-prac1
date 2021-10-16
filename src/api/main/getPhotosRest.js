import axios from 'axios';

export const getPhotosRest = async (params) => {
  try {
    const { data } = await axios({
      url: 'https://api.unsplash.com/photos',
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
