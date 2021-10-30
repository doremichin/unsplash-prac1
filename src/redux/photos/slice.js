const initialState = {
  list: [],
  randomPhoto: {
    urls: {},
    links: {
      html: '',
    },
    user: {
      name: '',
    },
  },
};
export const Action = {
  Types: {
    SET_PHOTOS: '@@MAIN/SET_PHOTOS',
    GET_PHOTOS: '@@MAIN/GET_PHOTOS',
    SET_RANDOM_PHOTOS: '@@MAIN/SET_RANDOM_PHOTOS',
    GET_RANDOM_PHOTOS: '@@MAIN/GET_RANDOM_PHOTOS',
  },
  Creators: {
    getPhotos: (payload) => ({
      type: Action.Types.GET_PHOTOS,
      payload,
    }),
    setPhotos: (payload) => ({
      type: Action.Types.SET_PHOTOS,
      payload,
    }),
    getRandomPhoto: (payload) => ({
      type: Action.Types.GET_RANDOM_PHOTOS,
      payload,
    }),
    setRandomPhoto: (payload) => ({
      type: Action.Types.SET_RANDOM_PHOTOS,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.SET_PHOTOS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case Action.Types.SET_RANDOM_PHOTOS: {
      return {
        ...state,
        randomPhoto: action.payload,
      };
    }
  }
};
export default reducer;
