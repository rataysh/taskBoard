/** @format */

import {IProject} from "../../../components/interface/IProject";
import {IComment, ITask} from "../../../components/interface/ITask";

export enum ActionString {
    ADD_PROJECT = "ADD_PROJECT",
    DELETE_PROJECT = "DELETE_PROJECT",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    ADD_SUB_TASK = "ADD_SUB_TASK",
    DELETE_SUB_TASK = "DELETE_SUB_TASK",
    CHANGE_DESCRIPTION_TASK = "CHANGE_DESCRIPTION_TASK",
    CHANGE_DESCRIPTION_SUB_TASK = "CHANGE_DESCRIPTION_SUB_TASK",
    CHANGE_TITLE_TASK = "CHANGE_TITLE_TASK",
    CHANGE_TITLE_SUB_TASK = "CHANGE_TITLE_SUB_TASK",
    ADD_COMMENT_TASK = "ADD_COMMENT_TASK",
    DELETE_COMMENT_TASK = "DELETE_COMMENT_TASK",
    ADD_COMMENT_SUB_TASK = "ADD_COMMENT_SUB_TASK",
    DELETE_COMMENT_SUB_TASK = "DELETE_COMMENT_SUB_TASK",
    PRECEDENCE_TASK = "PRECEDENCE_TASK",
    PRECEDENCE_SUB_TASK = "PRECEDENCE_SUB_TASK",
    STATUS_CHANGE = "STATUS_CHANGE",
    INDEX_CHANGE = "INDEX_CHANGE",
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
        taskId: number;
        subTask: ITask;
        description: string;
    };
}

// For change title
export interface ActionChangeTitleTask {
    type: ActionString.CHANGE_TITLE_TASK;
    payload: {
        projectId: number;
        task: ITask;
        title: string;
    };
}
export interface ActionChangeTitleSubTask {
    type: ActionString.CHANGE_TITLE_SUB_TASK;
    payload: {
        projectId: number;
        taskId: number;
        subTask: ITask;
        title: string;
    };
}

// For add/delete comemnts TASK
export interface ActionAddCommentTask {
    type: ActionString.ADD_COMMENT_TASK;
    payload: {
        projectId: number;
        taskId: number;
        comment: IComment;
    };
}
export interface ActionDeleteCommentTask {
    type: ActionString.DELETE_COMMENT_TASK;
    payload: {
        projectId: number;
        taskId: number;
        commentId: number;
    };
}

// For add/delete comemnts SUB-TASK
export interface ActionAddCommentSubTask {
    type: ActionString.ADD_COMMENT_SUB_TASK;
    payload: {
        projectId: number;
        taskId: number;
        subTaskId: number;
        comment: IComment;
    };
}
export interface ActionDeleteCommentSubTask {
    type: ActionString.DELETE_COMMENT_SUB_TASK;
    payload: {
        projectId: number;
        taskId: number;
        subTaskId: number;
        commentId: number;
    };
}

// For change precedence
export interface ActionChangePrecedenceTask {
    type: ActionString.PRECEDENCE_TASK;
    payload: {
        projectId: number;
        taskId: number;
        precedence: string;
    };
}
export interface ActionChangePrecedenceSubTask {
    type: ActionString.PRECEDENCE_SUB_TASK;
    payload: {
        projectId: number;
        taskId: number;
        subTask: ITask;
        precedence: string;
    };
}

// For change status
export interface ActionChangeStatusTask {
    type: ActionString.STATUS_CHANGE;
    payload: {
        projectId: number;
        taskId: number;
        status: number;
    };
}

// For change status
export interface ActionChangeIndexTask {
    type: ActionString.INDEX_CHANGE;
    payload: {
        projectId: number;
        taskId: number;
        index: number;
    };
}
