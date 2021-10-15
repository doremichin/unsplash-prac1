const initialState = {
  photos: [],
};
export const Action = {
  Types: {
    GET_PHOTOS: '@@MAIN/GET_PHOTOS',
    SET_PHOTOS: '@@MAIN/SET_PHOTOS',
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
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: return state;
  case Action.Types.SET_PHOTOS: {
    return {
      ...state,
      photos: action.payload,
    };
  }
  }
};
export default reducer;
