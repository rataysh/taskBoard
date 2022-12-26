/** @format */

enum ActionString {
    TASK_GET_ID = "TASK_GET_ID",
    TASK_RESET_ID = "TASK_RESET_ID",
}

interface ActionSubTaskGetId {
    type: ActionString.TASK_GET_ID;
    payload: number;
}

interface ActionSubTaskResetId {
    type: ActionString.TASK_RESET_ID;
}

type ActionEachTask = ActionSubTaskGetId | ActionSubTaskResetId;

const initialState: number = 0;

export const idTaskReducer = (
    state = initialState,
    action: ActionEachTask
): number => {
    switch (action.type) {
        case ActionString.TASK_GET_ID:
            return action.payload;
        case ActionString.TASK_RESET_ID:
            return (state = 0);
        default:
            return state;
    }
};
