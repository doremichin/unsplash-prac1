const initialState = {
  isView: false,
};
export const Action = {
  Types: {
    UPDATE_POPUP: '@@POPUP/UPDATE_POPUP',
    TOGGLE_POPUP: '@@POPUP/TOGGLE_POPUP',
  },
  Creators: {
    updatePopup: (payload) => ({
      type: Action.Types.UPDATE_POPUP,
      payload,
    }),
    togglePopup: (payload) => ({
      type: Action.Types.TOGGLE_POPUP,
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
  }
};
export default reducer;
