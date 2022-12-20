/** @format */

import {ITask} from "../../components/interface/ITask";

enum ActionString {
    GET_ALL_TASKS = "GET_ALL_TASKS",
}


interface ActionGetAllTasks {
    type: ActionString.GET_ALL_TASKS;
    payload: ITask[];
}

type ActionProjects = ActionGetAllTasks;

const initialState: ITask[] = [];

export const taskBoardDataReducer = (
    state = initialState,
    action: ActionProjects
): ITask[] => {
    switch (action.type) {
        // case ActionString.GET_TITLE:
        //     return [...state, action.payload];
        case ActionString.GET_ALL_TASKS:
            return [...action.payload];
        default:
            return state;
    }
};
