type PhotosAction =
  | ReturnType<typeof Action.Creators.getPhotos>
  | ReturnType<typeof Action.Creators.setPhotos>
  | ReturnType<typeof Action.Creators.getRandomPhoto>
  | ReturnType<typeof Action.Creators.setRandomPhoto>
  | ReturnType<typeof Action.Creators.getPhotoById>
  | ReturnType<typeof Action.Creators.setPhotoById>
  | ReturnType<typeof Action.Creators.getRelatedPhotoById>
  | ReturnType<typeof Action.Creators.setRelatedPhotoById>;

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
  related: {},
};
export const Action = {
  Types: {
    SET_PHOTOS: '@@PHOTOS/SET_PHOTOS' as const,
    GET_PHOTOS: '@@PHOTOS/GET_PHOTOS' as const,
    SET_RANDOM_PHOTOS: '@@PHOTOS/SET_RANDOM_PHOTOS' as const,
    GET_RANDOM_PHOTOS: '@@PHOTOS/GET_RANDOM_PHOTOS' as const,
    GET_PHOTO_BY_ID: '@@PHOTOS/GET_PHOTO_BY_ID' as const,
    SET_PHOTO_BY_ID: '@@PHOTOS/SET_PHOTO_BY_ID' as const,
    GET_RELATED_PHOTO_BY_ID: '@@PHOTOS/GET_RELATED_PHOTO_BY_ID' as const,
    SET_RELATED_PHOTO_BY_ID: '@@PHOTOS/SET_RELATED_PHOTO_BY_ID' as const,
  },
  Creators: {
    getPhotos: (payload : any) => ({
      type: Action.Types.GET_PHOTOS,
      payload,
    }),
    setPhotos: (payload : any) => ({
      type: Action.Types.SET_PHOTOS,
      payload,
    }),
    getRandomPhoto: (payload : any) => ({
      type: Action.Types.GET_RANDOM_PHOTOS,
      payload,
    }),
    setRandomPhoto: (payload : any) => ({
      type: Action.Types.SET_RANDOM_PHOTOS,
      payload,
    }),
    getPhotoById: (payload : any) => ({
      type: Action.Types.GET_PHOTO_BY_ID,
      payload,
    }),
    setPhotoById: (payload : any) => ({
      type: Action.Types.SET_PHOTO_BY_ID,
      payload,
    }),
    getRelatedPhotoById: (payload : any) => ({
      type: Action.Types.GET_RELATED_PHOTO_BY_ID,
      payload,
    }),
    setRelatedPhotoById: (payload : any) => ({
      type: Action.Types.SET_RELATED_PHOTO_BY_ID,
      payload,
    }),
  },
};
const reducer = (state = initialState, action : PhotosAction) => {
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
