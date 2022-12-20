/** @format */

// import moment from "moment";
import { useLocation } from "react-router-dom";
import {ITask} from "../../components/interface/ITask";
// import { testTask } from "../../components/offlineData";

enum ActionString {
    GET_EACH_TASK = "GET_EACH_TASK",
    CLEAR_TASK = "CLEAR_TASK",
}

interface ActionEachTaskFilterById {
    type: ActionString.GET_EACH_TASK;
    payload: ITask;
}

interface ActionEachTaskClearTask {
    type: ActionString.CLEAR_TASK;
}

type ActionEachTask = ActionEachTaskFilterById | ActionEachTaskClearTask;


const initialState: ITask[] = [];

export const eachTaskReducer = (
    state = initialState,
    action: ActionEachTask
): ITask[] => {
    switch (action.type) {
        case ActionString.GET_EACH_TASK:
            return [action.payload];
        case ActionString.CLEAR_TASK:
            return [];
        default:
            return state;
    }
};
