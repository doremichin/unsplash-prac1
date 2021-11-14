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
  detail: {
    tags: [],
  },
  related: null,
};
export const Action = {
  Types: {
    SET_PHOTOS: '@@PHOTOS/SET_PHOTOS',
    GET_PHOTOS: '@@PHOTOS/GET_PHOTOS',
    SET_RANDOM_PHOTOS: '@@PHOTOS/SET_RANDOM_PHOTOS',
    GET_RANDOM_PHOTOS: '@@PHOTOS/GET_RANDOM_PHOTOS',
    GET_PHOTO_BY_ID: '@@PHOTOS/GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: '@@PHOTOS/SET_PHOTO_BY_ID',
    GET_RELATED_PHOTO_BY_ID: '@@PHOTOS/GET_RELATED_PHOTO_BY_ID',
    SET_RELATED_PHOTO_BY_ID: '@@PHOTOS/SET_RELATED_PHOTO_BY_ID',
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
    getPhotoById: (payload) => ({
      type: Action.Types.GET_PHOTO_BY_ID,
      payload,
    }),
    setPhotoById: (payload) => ({
      type: Action.Types.SET_PHOTO_BY_ID,
      payload,
    }),
    getRelatedPhotoById: (payload) => ({
      type: Action.Types.GET_RELATED_PHOTO_BY_ID,
      payload,
    }),
    setRelatedPhotoById: (payload) => ({
      type: Action.Types.SET_RELATED_PHOTO_BY_ID,
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
    case Action.Types.SET_PHOTO_BY_ID: {
      return {
        ...state,
        detail: {
          ...state.detail,
          [action.payload.id]: action.payload.data,
        },
      };
    }
    case Action.Types.SET_RELATED_PHOTO_BY_ID: {
      return {
        ...state,
        related: {
          ...state.related,
          [action.payload.id]: action.payload.data,
        },
      };
    }
  }
};
export default reducer;
