import axios from 'axios';

export const getTopicByIdRest = async (slug) => {
  try {
    const { data } = await axios({
      url: `https://api.unsplash.com/topics/${slug}`,
      method: 'get',
      headers: {
        Authorization: 'Client-ID 6_2N9-xx9qq8gNRcyVQgQmNVMmbSRuaIqMc1KQYpwYA',
      },
    });

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
