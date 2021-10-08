const initialState = {
    searchQuery : ''
};
export const Action = {
    Types : {
        SEARCH_QUERY : 'SEARCH_QUERY'
    },
    Creators : {
        setSearchQuery : (payload) => {
            return {
                type : Action.Types.SEARCH_QUERY,
                payload
            }
        }
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        default : return state;
        case Action.Types.SEARCH_QUERY : {
            return {
                ...state,
                searchQuery : action.payload
            }
        }
    }
}
export default reducer;