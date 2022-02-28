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
    SEARCH_NEXT_RESULTS: '@@SEARCH/SEARCH_NEXT_RESULTS',
    SET_NEXT_RESULTS: '@@SEARCH/SET_NEXT_RESULTS',
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
    searchNextResults: (payload) => ({
      type: Action.Types.SEARCH_NEXT_RESULTS,
      payload,
    }),
    setNextResults: (payload) => ({
      type: Action.Types.SET_NEXT_RESULTS,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
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
  case Action.Types.SET_NEXT_RESULTS: {
    return {
      ...state,
      [action.payload.searchType]: action.payload.data,
    };
  }
  }
};
export default reducer;
