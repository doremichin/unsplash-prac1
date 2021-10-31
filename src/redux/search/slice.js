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
    SEARCH_QUERY: '@@SEARCH/SEARCH_QUERY',
    GET_SEARCH_RESULTS: '@@SEARCH/GET_SEARCH_RESULTS',
    SET_SEARCH_RESULTS: '@@SEARCH/SET_SEARCH_RESULTS',
    GET_NEXT_PHOTOS: '@@SEARCH/GET_NEXT_PHOTOS',
    SET_NEXT_PHOTOS: '@@SEARCH/SET_NEXT_PHOTOS',
    GET_NEXT_COLLECTIONS: '@@SEARCH/GET_NEXT_COLLECTIONS',
    SET_NEXT_COLLECTIONS: '@@SEARCH/SET_NEXT_COLLECTIONS',
    GET_NEXT_USERS: '@@SEARCH/GET_NEXT_USERS',
    SET_NEXT_USERS: '@@SEARCH/SET_NEXT_USERS',
  },
  Creators: {
    setSearchQuery: (payload) => ({
      type: Action.Types.SEARCH_QUERY,
      payload,
    }),
    getSearchResults: (payload) => ({
      type: Action.Types.GET_SEARCH_RESULTS,
      payload,
    }),
    setSearchResults: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
    getNextPhotos: (payload) => ({
      type: Action.Types.GET_NEXT_PHOTOS,
      payload,
    }),
    setNextPhotos: (payload) => ({
      type: Action.Types.SET_NEXT_PHOTOS,
      payload,
    }),
    getNextCollections: (payload) => ({
      type: Action.Types.GET_NEXT_COLLECTIONS,
      payload,
    }),
    setNextCollections: (payload) => ({
      type: Action.Types.SET_NEXT_COLLECTIONS,
      payload,
    }),
    getNextUsers: (payload) => ({
      type: Action.Types.GET_NEXT_USERS,
      payload,
    }),
    setNextUsers: (payload) => ({
      type: Action.Types.SET_NEXT_USERS,
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
    case Action.Types.SET_NEXT_PHOTOS: {
      return {
        ...state,
        photos: {
          ...action.payload,
        },
      };
    }
    case Action.Types.SET_NEXT_COLLECTIONS: {
      return {
        ...state,
        collections: {
          ...action.payload,
        },
      };
    }
    case Action.Types.SET_NEXT_USERS: {
      return {
        ...state,
        users: {
          ...action.payload,
        },
      };
    }
  }
};
export default reducer;
