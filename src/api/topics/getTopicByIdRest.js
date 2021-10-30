import axios from 'axios';

export const getTopicByIdRest = async (slug) => {
  try {
    const { data } = await axios({
      url: `https://api.unsplash.com/topics/${slug}`,
      method: 'get',
      params: {
        client_id: '6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
      },
    });
    return data;
  } catch (err) {
    return err;
  }
};
