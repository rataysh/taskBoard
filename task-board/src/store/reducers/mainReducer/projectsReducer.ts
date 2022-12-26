/** @format */

import {dataProject} from "../../../components/offlineData";
import {IProject} from "../../../components/interface/IProject";
import {
    ActionAddCommentSubTask,
    ActionAddCommentTask,
    ActionChangeDescriptionSubTask,
    ActionChangeDescriptionTask,
    ActionChangeTitleSubTask,
    ActionChangeTitleTask,
    ActionDeleteCommentSubTask,
    ActionDeleteCommentTask,
    ActionProjectsAdd,
    ActionProjectsDel,
    ActionString,
    ActionSubTaskAdd,
    ActionSubTaskDelete,
    ActionTaskAdd,
    ActionTaskDelete,
} from "./actionsMain";

type ActionProjects =
    | ActionProjectsAdd
    | ActionProjectsDel
    | ActionTaskAdd
    | ActionTaskDelete
    | ActionSubTaskAdd
    | ActionSubTaskDelete
    | ActionChangeDescriptionTask
    | ActionChangeDescriptionSubTask
    | ActionChangeTitleTask
    | ActionChangeTitleSubTask
    | ActionAddCommentTask
    | ActionAddCommentSubTask
    | ActionDeleteCommentTask
    | ActionDeleteCommentSubTask;

const initialState: IProject[] = dataProject;

export const projectsReducer = (
    state = initialState,
    action: ActionProjects
): IProject[] => {
    switch (action.type) {
        // PROJECT
        case ActionString.ADD_PROJECT:
            return [...state, action.payload];
        case ActionString.DELETE_PROJECT:
            return [
                ...state.filter((project) => project.id !== action.payload.id),
            ];

        // TASK
        case ActionString.ADD_TASK:
            return [
                ...state.filter(
                    (project) => project.id !== action.payload.projectId
                ),
                {
                    ...state.filter(
                        (project) => project.id === action.payload.projectId
                    )[0],
                    tasks: [
                        ...state.filter(
                            (project) => project.id === action.payload.projectId
                        )[0].tasks,
                        action.payload.task,
                    ],
                },
            ];
        case ActionString.DELETE_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.filter(
                                  (task) => task.id !== action.payload.task.id
                              ),
                          };
                }),
            ];

        // SUB_TASK
        case ActionString.ADD_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: [
                                                ...(task.subTasks ?? []),
                                                action.payload.subTask,
                                            ],
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.DELETE_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.filter(
                                                (sub) =>
                                                    sub.id !==
                                                    action.payload.subTask.id
                                            ),
                                        };
                              }),
                          };
                }),
            ];

        // CHANGE DESCRIPTION
        case ActionString.CHANGE_DESCRIPTION_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            description:
                                                action.payload.description,
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.CHANGE_DESCRIPTION_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.map(
                                                (sub) => {
                                                    return sub.id !==
                                                        action.payload.subTask
                                                            .id
                                                        ? sub
                                                        : {
                                                              ...sub,
                                                              description:
                                                                  action.payload
                                                                      .description,
                                                          };
                                                }
                                            ),
                                        };
                              }),
                          };
                }),
            ];

        // CHANGE TITLE
        case ActionString.CHANGE_TITLE_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.task.id
                                      ? task
                                      : {
                                            ...task,
                                            title: action.payload.title,
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.CHANGE_TITLE_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.map(
                                                (sub) => {
                                                    return sub.id !==
                                                        action.payload.subTask
                                                            .id
                                                        ? sub
                                                        : {
                                                              ...sub,
                                                              title: action
                                                                  .payload
                                                                  .title,
                                                          };
                                                }
                                            ),
                                        };
                              }),
                          };
                }),
            ];

        //Comment TASK
        case ActionString.ADD_COMMENT_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            comments: [
                                                ...(task.comments ?? []),
                                                action.payload.comment,
                                            ],
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.DELETE_COMMENT_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            comments: task.comments?.filter(
                                                (com) =>
                                                    com.id !==
                                                    action.payload.commentId
                                            ),
                                        };
                              }),
                          };
                }),
            ];

        //Comment SUB_TASK
        case ActionString.ADD_COMMENT_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.map(
                                                (sub) => {
                                                    return sub.id !==
                                                        action.payload.subTaskId
                                                        ? sub
                                                        : {
                                                              ...sub,
                                                              comments: [
                                                                  ...(sub.comments ??
                                                                      []),
                                                                  action.payload
                                                                      .comment,
                                                              ],
                                                          };
                                                }
                                            ),
                                        };
                              }),
                          };
                }),
            ];
        case ActionString.DELETE_COMMENT_SUB_TASK:
            return [
                ...state.map((proj) => {
                    return proj.id !== action.payload.projectId
                        ? proj
                        : {
                              ...proj,
                              tasks: proj.tasks.map((task) => {
                                  return task.id !== action.payload.taskId
                                      ? task
                                      : {
                                            ...task,
                                            subTasks: task.subTasks?.map(
                                                (sub) => {
                                                    return sub.id !==
                                                        action.payload.subTaskId
                                                        ? sub
                                                        : {
                                                              ...sub,
                                                              comments:
                                                                  sub.comments?.filter(
                                                                      (com) =>
                                                                          com.id !==
                                                                          action
                                                                              .payload
                                                                              .commentId
                                                                  ),
                                                          };
                                                }
                                            ),
                                        };
                              }),
                          };
                }),
            ];

        default:
            return state;
    }
};
