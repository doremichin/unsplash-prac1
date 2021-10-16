const initialState = {
  list: [],
  detail: {},

};
export const Action = {
  Types: {
    GET_TOPICS: '@@TOPICS/GET_TOPICS',
    SET_TOPICS: '@@TOPICS/SET_TOPICS',
    GET_TOPIC_BY_ID: '@@TOPICS/GET_TOPIC_BY_ID',
    SET_TOPIC_BY_ID: '@@TOPICS/SET_TOPIC_BY_ID',
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
  }
};
export default reducer;
