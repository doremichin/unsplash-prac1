const initialState = {
  popup: false,
  detail: {},
};
export const Action = {
  Types: {
    TOGGLE_POPUP: '@@APP/TOGGLE_POPUP',
    GET_PHOTO_BY_ID: '@@APP/GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: '@@APP/SET_PHOTO_BY_ID',
  },
  Creators: {
    togglePopup: (payload) => ({
      type: Action.Types.TOGGLE_POPUP,
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
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.TOGGLE_POPUP: {
      return {
        ...state,
        popup: action.payload,
      };
    }
    case Action.Types.SET_PHOTO_BY_ID: {
      return {
        ...state,
        detail: action.payload,
      };
    }
  }
};
export default reducer;
