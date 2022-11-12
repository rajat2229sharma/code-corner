import actionAll from "../action/action";

const initialState = {
    list: []
}

const reducerData = (state = initialState, action) => {

    switch (action.type) {

        case actionAll.ADD_TASK:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            };

        case actionAll.REMOVE_TASK:
            const newList = state.list.filter((value) => value.id !== action.id);
            return {
                ...state,
                list: newList,
            };

        case actionAll.UPDATE_TASK:
                return {
                    ...state,
                    list: [...state.list.filter((value) => value.id !== action.payload.id),
                        action.payload,
                    ],
                }

        default:
            return state;
    }

}

export default reducerData;