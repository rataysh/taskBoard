/** @format */

enum ActionString {
    POP_UP_OPEN_SUB_TASK = "POP_UP_OPEN_SUB_TASK",
    POP_UP_CLOSE_SUB_TASK = "POP_UP_CLOSE_SUB_TASK",
}

interface ActionSubTaskOpen {
    type: ActionString.POP_UP_OPEN_SUB_TASK;
}

interface ActionSubTaskClose {
    type: ActionString.POP_UP_CLOSE_SUB_TASK;
}

type ActionEachTask = ActionSubTaskOpen | ActionSubTaskClose;

const initialState: boolean = false;

export const subTaskViewReducer = (
    state = initialState,
    action: ActionEachTask
): boolean => {
    switch (action.type) {
        case ActionString.POP_UP_OPEN_SUB_TASK:
            return (state = true);
        case ActionString.POP_UP_CLOSE_SUB_TASK:
            return (state = false);
        default:
            return state;
    }
};
