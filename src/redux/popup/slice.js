const initialState = {
  isView: false,
  detail: {
    height: 0,
    width: 0,
    user: {
      profile_image: {},
    },
    urls: {
    },
    views: 0,
    downloads: 0,
    related_collections: {
      results: [],
    },
    tags: [],
    topic_submissions: {},
  },
  related: {},
};
export const Action = {
  Types: {
    TOGGLE_POPUP: '@@POPUP/TOGGLE_POPUP',
    GET_PHOTO_BY_ID: '@@POPUP/GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: '@@POPUP/SET_PHOTO_BY_ID',
    GET_RELATED_PHOTO_BY_ID: '@@POPUP/GET_RELATED_PHOTO_BY_ID',
    SET_RELATED_PHOTO_BY_ID: '@@POPUP/SET_RELATED_PHOTO_BY_ID',
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
    case Action.Types.TOGGLE_POPUP: {
      return {
        ...state,
        isView: action.payload,
      };
    }
    case Action.Types.SET_PHOTO_BY_ID: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case Action.Types.SET_RELATED_PHOTO_BY_ID: {
      return {
        ...state,
        related: action.payload,
      };
    }
  }
};
export default reducer;
