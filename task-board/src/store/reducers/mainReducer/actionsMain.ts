/** @format */

import {IProject} from "../../../components/interface/IProject";
import {ITask} from "../../../components/interface/ITask";

export enum ActionString {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    ADD_SUB_TASK = "ADD_SUB_TASK",
    DELETE_SUB_TASK = "DELETE_SUB_TASK",
    CHANGE_DESCRIPTION_TASK = "CHANGE_DESCRIPTION_TASK",
    CHANGE_DESCRIPTION_SUB_TASK = "CHANGE_DESCRIPTION_SUB_TASK",
}

// Add and delete PROJECT
export interface ActionProjectsAdd {
    type: ActionString.ADD_PROJECT;
    payload: IProject;
}
export interface ActionProjectsDel {
    type: ActionString.DELETE_PROJECT;
    payload: IProject;
}

// Add and delete TASK
export interface ActionTaskAdd {
    type: ActionString.ADD_TASK;
    payload: {
        projectId: number;
        task: ITask;
    };
}
export interface ActionTaskDelete {
    type: ActionString.DELETE_TASK;
    payload: {
        projectId: number;
        task: ITask;
    };
}

// Add and delete SUB-TASK
export interface ActionSubTaskAdd {
    type: ActionString.ADD_SUB_TASK;
    payload: {
        projectId: number;
        task: ITask;
        subTask: ITask;
    };
}
export interface ActionSubTaskDelete {
    type: ActionString.DELETE_SUB_TASK;
    payload: {
        projectId: number;
        task: ITask;
        subTask: ITask;
    };
}

// For change description
export interface ActionChangeDescriptionTask {
    type: ActionString.CHANGE_DESCRIPTION_TASK;
    payload: {
        projectId: number;
        task: ITask;
        description: string;
    };
}
export interface ActionChangeDescriptionSubTask {
    type: ActionString.CHANGE_DESCRIPTION_SUB_TASK;
    payload: {
        projectId: number;
        task: ITask;
        subTask: ITask;
        description: string;
    };
}
