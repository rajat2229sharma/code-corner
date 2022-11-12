import actionAll from "../action/action";

const initialState = {
    list: []
}

const reducerData = (state = initialState, action) => {

    switch (action.type) {

        case actionAll.ADD_TASK:
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                    }
                ]
            };

        case actionAll.REMOVE_TASK:
            const newList = state.list.filter((value) => value.id !== action.id);
            return {
                ...state,
                list: newList,
            };

        case actionAll.UPDATE_TASK:
                const { updateId, updateData } = action.payload;
                return {
                    ...state,
                    list: [...state.list.filter((value) => value.id !== updateId),
                        { id: updateId, data: updateData },
                    ],
                }

        default:
            return state;
    }

}

export default reducerData;