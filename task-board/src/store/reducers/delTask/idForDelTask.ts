/** @format */

import {ITask} from "../../../components/interface/ITask";

enum ActionString {
    DEL_TASK_GET_ID_AND_TASK = "DEL_TASK_GET_ID_AND_TASK",
    DEL_TASK_RESET_ID_AND_TASK = "DEL_TASK_RESET_ID_AND_TASK",
}

interface ActionGetTaskAndId {
    type: ActionString.DEL_TASK_GET_ID_AND_TASK;
    payload: {
        projId: number;
        task: ITask;
    };
}

interface ActionResetTaskAndId {
    type: ActionString.DEL_TASK_RESET_ID_AND_TASK;
}

type ActionEachTask = ActionGetTaskAndId | ActionResetTaskAndId;


interface IidForDelTaskReducer {
    projId: number;
    task: ITask | null;
}
const initialState: IidForDelTaskReducer = {
    projId: 0,
    task: null,
};

export const idForDelTaskReducer = (
    state = initialState,
    action: ActionEachTask
): IidForDelTaskReducer => {
    switch (action.type) {
        case ActionString.DEL_TASK_GET_ID_AND_TASK:
            return {
                projId: action.payload.projId,
                task: action.payload.task,
            };
        case ActionString.DEL_TASK_RESET_ID_AND_TASK:
            return {
                projId: 0,
                task: null,
            };
        default:
            return state;
    }
};
