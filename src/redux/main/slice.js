const initialState = {
    photos : []
};
export const Action = {
    Types : {
        SET_PHOTOS : 'SET_PHOTOS'
    },
    Creators : {
        setPhotos : (payload) => ({
            type : Action.Types.SET_PHOTOS,
            payload
        })
    }
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        default : return state;
        case Action.Types.SET_PHOTOS : {
            return {
                ...state,
                photos : action.payload
            }
        }
    }
}
export default reducer;