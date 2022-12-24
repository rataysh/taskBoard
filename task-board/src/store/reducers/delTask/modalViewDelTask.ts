/** @format */

enum ActionString {
    POP_UP_OPEN_DEL_TASK = "POP_UP_OPEN_DEL_TASK",
    POP_UP_CLOSE_DEL_TASK = "POP_UP_CLOSE_DEL_TASK",
}

interface ActionDelTaskOpen {
    type: ActionString.POP_UP_OPEN_DEL_TASK;
}

interface ActionDelTaskClose {
    type: ActionString.POP_UP_CLOSE_DEL_TASK;
}

type ActionEachTask = ActionDelTaskOpen | ActionDelTaskClose;

const initialState: boolean = false;

export const modalViewDelTaskReducer = (
    state = initialState,
    action: ActionEachTask
): boolean => {
    switch (action.type) {
        case ActionString.POP_UP_OPEN_DEL_TASK:
            return (state = true);
        case ActionString.POP_UP_CLOSE_DEL_TASK:
            return (state = false);
        default:
            return state;
    }
};
