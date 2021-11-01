const initialState = {
  list: [],
  detail: {
    owners: [],
    top_contributors: [],

  },
  photos: [],

};
export const Action = {
  Types: {
    GET_TOPICS: '@@TOPICS/GET_TOPICS',
    SET_TOPICS: '@@TOPICS/SET_TOPICS',
    GET_TOPIC_BY_ID: '@@TOPICS/GET_TOPIC_BY_ID',
    SET_TOPIC_BY_ID: '@@TOPICS/SET_TOPIC_BY_ID',
    GET_TOPIC_PHOTOS: '@@TOPICS/GET_TOPIC_PHOTOS',
    SET_TOPIC_PHOTOS: '@@TOPICS/SET_TOPIC_PHOTOS',
    GET_NEXT_TOPIC_PHOTOS: '@@TOPICS/GET_NEXT_TOPIC_PHOTOS',
    SET_NEXT_TOPIC_PHOTOS: '@@TOPICS/SET_NEXT_TOPIC_PHOTOS',
  },
  Creators: {
    getTopics: (payload) => ({
      type: Action.Types.GET_TOPICS,
      payload,
    }),
    setTopics: (payload) => ({
      type: Action.Types.SET_TOPICS,
      payload,
    }),
    getTopicById: (payload) => ({
      type: Action.Types.GET_TOPIC_BY_ID,
      payload,
    }),
    setTopicById: (payload) => ({
      type: Action.Types.SET_TOPIC_BY_ID,
      payload,
    }),
    getTopicPhotos: (payload) => ({
      type: Action.Types.GET_TOPIC_PHOTOS,
      payload,
    }),
    setTopicPhotos: (payload) => ({
      type: Action.Types.SET_TOPIC_PHOTOS,
      payload,
    }),
    getNextTopicPhotos: (payload) => ({
      type: Action.Types.GET_NEXT_TOPIC_PHOTOS,
      payload,
    }),
    setNextTopicPhotos: (payload) => ({
      type: Action.Types.SET_NEXT_TOPIC_PHOTOS,
      payload,
    }),
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case Action.Types.SET_TOPICS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case Action.Types.SET_TOPIC_BY_ID: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case Action.Types.SET_TOPIC_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    case Action.Types.SET_NEXT_TOPIC_PHOTOS: {
      return {
        ...state,
        photos: action.payload,
      };
    }
  }
};
export default reducer;
