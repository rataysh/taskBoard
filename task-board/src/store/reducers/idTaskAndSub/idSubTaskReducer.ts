/** @format */

enum ActionString {
    SUB_TASK_GET_ID = "SUB_TASK_GET_ID",
    SUB_TASK_RESET_ID = "SUB_TASK_RESET_ID",
}

interface ActionSubTaskGetId {
    type: ActionString.SUB_TASK_GET_ID;
    payload: number;
}

interface ActionSubTaskResetId {
    type: ActionString.SUB_TASK_RESET_ID;
}

type ActionEachTask = ActionSubTaskGetId | ActionSubTaskResetId;

const initialState: number | null = null;

export const idSubTaskReducer = (
    state = initialState,
    action: ActionEachTask
): number | null => {
    switch (action.type) {
        case ActionString.SUB_TASK_GET_ID:
            return action.payload;
        case ActionString.SUB_TASK_RESET_ID:
            return (state = null);
        default:
            return state;
    }
};
