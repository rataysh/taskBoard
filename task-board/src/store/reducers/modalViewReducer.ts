/** @format */

enum ActionString {
    POP_UP_OPEN_EACH_TASK = "POP_UP_OPEN_EACH_TASK",
    POP_UP_CLOSE_EACH_TASK = "POP_UP_CLOSE_EACH_TASK",
}

interface ActionEachTaskOpen {
    type: ActionString.POP_UP_OPEN_EACH_TASK;
}

interface ActionEachTaskClose {
    type: ActionString.POP_UP_CLOSE_EACH_TASK;
}

type ActionEachTask = ActionEachTaskOpen | ActionEachTaskClose;

const initialState: boolean = false;

export const modalViewReducer = (
    state = initialState,
    action: ActionEachTask
): boolean => {
    switch (action.type) {
        case ActionString.POP_UP_OPEN_EACH_TASK:
            return (state = true);
        case ActionString.POP_UP_CLOSE_EACH_TASK:
            return (state = false);
        default:
            return state;
    }
};
