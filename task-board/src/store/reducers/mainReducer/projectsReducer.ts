/** @format */

import {dataProject} from "../../../components/offlineData";
import {IProject} from "../../../components/interface/IProject";
import {
    ActionChangeDescriptionSubTask,
    ActionChangeDescriptionTask,
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
    | ActionChangeDescriptionSubTask;

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
            return state;
        default:
            return state;
    }
};
