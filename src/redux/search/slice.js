const initialState = {
  searchQuery: '',
  photos: {
    results: [],
    total: 0,
    total_pages: 0,
  },
  collections: {
    results: [],
    total: 0,
    total_pages: 0,
  },
  users: {
    results: [],
    total: 0,
    total_pages: 0,
  },
};
export const Action = {
  Types: {
    SEARCH_PHOTOS: '@@SEARCH/SEARCH_PHOTOS',
    SEARCH_QUERY: '@@SEARCH/SEARCH_QUERY',
    SET_SEARCH_RESULTS: '@@SEARCH/SET_SEARCH_RESULTS',
    GET_NEXT_SEARCH_PHOTOS: '@@SEARCH/GET_NEXT_SEARCH_PHOTOS',
    SET_NEXT_SEARCH_PHOTOS: '@@SEARCH/SET_NEXT_SEARCH_PHOTOS',
  },
  Creators: {
    searchPhotos: (payload) => ({
      type: Action.Types.SEARCH_PHOTOS,
      payload,
    }),
    setSearchQuery: (payload) => ({
      type: Action.Types.SEARCH_QUERY,
      payload,
    }),
    setSearchResults: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
    getNextSearchPhotos: (payload) => ({
      type: Action.Types.GET_NEXT_SEARCH_PHOTOS,
      payload,
    }),
    setNextSearchPhotos: (payload) => ({
      type: Action.Types.SET_NEXT_SEARCH_PHOTOS,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case Action.Types.SET_SEARCH_RESULTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case Action.Types.SET_NEXT_SEARCH_PHOTOS: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};
export default reducer;
