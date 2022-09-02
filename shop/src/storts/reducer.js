import { SEARCH_DIV } from "./action";


const initialState = {
    checkIconSearch: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DIV:
            if (state.checkIconSearch === true) {
                return {
                    ...state,
                    checkIconSearch: false
                }
            } else {
                return {
                    ...state,
                    checkIconSearch: true
                }
            }
        default:
            return state;
    }
};
export default rootReducer;