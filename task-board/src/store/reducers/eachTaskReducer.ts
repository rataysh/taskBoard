/** @format */

// import moment from "moment";
import {ITask} from "../../components/interface/ITask";
import { testTask } from "../../components/offlineData";

enum ActionString {
    GET_ID_EACH_TASK = "GET_ID_EACH_TASK",
    CLEAR_TASK = "CLEAR_TASK",
}

interface ActionEachTaskFilterById {
    type: ActionString.GET_ID_EACH_TASK;
    payload: ITask;
}

interface ActionEachTaskClearTask {
    type: ActionString.CLEAR_TASK;
}

type ActionEachTask = ActionEachTaskFilterById | ActionEachTaskClearTask;


const initialState: ITask[] = testTask;

export const eachTaskReducer = (
    state = initialState,
    action: ActionEachTask
): ITask[] => {
    switch (action.type) {
        case ActionString.GET_ID_EACH_TASK:
            return [...state.filter((task) => task.id === action.payload.id)];
        case ActionString.CLEAR_TASK:
            return testTask;
        default:
            return state;
    }
};
