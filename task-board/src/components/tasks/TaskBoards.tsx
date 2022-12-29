/** @format */

import React, {useEffect, useState} from "react";
import "../../styles/tasksBoard.scss";
import {ITask} from "../interface/ITask";
import {EachTaskModal} from "./popUpWindows/eactTask/EachTaskModal";
import {EachBoard} from "./EachBoard";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {DragDropContext, DropResult} from "react-beautiful-dnd";

interface ITaskBoards {
    tasks: ITask[];
}

export const TaskBoards: React.FC<ITaskBoards> = ({tasks}) => {
    const dispatch = useDispatch();
    const eachTaskActive = useTypedSelector((state) => state.modalView);
    const idTask = useTypedSelector((state) => state.idTask);
    const certainProject = useLocation();

    const allProject = useTypedSelector((state) => state.projects);
    const [allTask, setAllTask] = useState<ITask[]>(
        allProject.filter((proj) => proj.id === certainProject.state.id)[0]
            .tasks
    );
    useEffect(() => {
        setAllTask(
            allProject.filter((proj) => proj.id === certainProject.state.id)[0]
                .tasks
        );
    }, [allProject]);

    // Filter state for status
    const [queue, setQueue] = useState<ITask[]>([]);
    const [development, setDevelopment] = useState<ITask[]>([]);
    const [done, setDone] = useState<ITask[]>([]);
    useEffect(() => {
        createInd(setQueue, 0);
        createInd(setDevelopment, 1);
        createInd(setDone, 2);
    }, [allTask]);

    const createInd = (
        setBoard: React.Dispatch<React.SetStateAction<ITask[]>>,
        status: number
    ) => {
        const boardIndex = allTask
            .filter((task) => task.status === status)
            .map((task, i) => {
                return task.index === undefined
                    ? {
                          ...task,
                          index: i,
                      }
                    : task;
            });
        setBoard(boardIndex);
    };

    const refreshInd = (
        setBoard: React.Dispatch<React.SetStateAction<ITask[]>>,
        status: number
    ) => {
        const boardIndex = allTask
            .filter((task) => task.status === status)
            .map((task, i) => {
                return {
                    ...task,
                    index: i,
                };
            });
        setBoard(boardIndex);
    };
    useEffect(() => {
        refreshInd(setQueue, 0);
        refreshInd(setDevelopment, 1);
        refreshInd(setDone, 2);
    }, [allTask.length]);

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;
        console.log(result);

        if (!destination) return;

        const status =
            destination.droppableId === "Queue"
                ? 0
                : destination.droppableId === "Development"
                ? 1
                : 2;

        const statusSource =
            source.droppableId === "Queue"
                ? 0
                : source.droppableId === "Development"
                ? 1
                : 2;

        const board = status === 0 ? queue : status === 1 ? development : done;

        const boardSource =
            statusSource === 0
                ? queue
                : statusSource === 1
                ? development
                : done;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        } else if (
            source.droppableId === destination.droppableId &&
            source.index !== destination.index
        ) {
            dispatch({
                type: "INDEX_CHANGE",
                payload: {
                    projectId: certainProject.state.id,
                    taskId: boardSource.filter(
                        (task) => task.index === destination.index
                    )[0].id,
                    index: source.index,
                },
            });

            dispatch({
                type: "INDEX_CHANGE",
                payload: {
                    projectId: certainProject.state.id,
                    taskId: Number(result.draggableId),
                    index: destination.index,
                },
            });
        } else {
            dispatch({
                type: "STATUS_CHANGE",
                payload: {
                    projectId: certainProject.state.id,
                    taskId: Number(result.draggableId),
                    status: status,
                },
            });

            board
                .filter((task) => task.index! >= destination.index)
                .map((task) =>
                    dispatch({
                        type: "INDEX_CHANGE",
                        payload: {
                            projectId: certainProject.state.id,
                            taskId: task.id,
                            index: task.index! + 1,
                        },
                    })
                );

            dispatch({
                type: "INDEX_CHANGE",
                payload: {
                    projectId: certainProject.state.id,
                    taskId: Number(result.draggableId),
                    index: destination.index,
                },
            });

            boardSource
                .filter((task) => task.id.toString() !== result.draggableId)
                .map((task, i) =>
                    dispatch({
                        type: "INDEX_CHANGE",
                        payload: {
                            projectId: certainProject.state.id,
                            taskId: task.id,
                            index: i,
                        },
                    })
                );
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <div className='allBoard'>
                    <EachBoard title={"Queue"} tasks={queue} />
                    <EachBoard title={"Development"} tasks={development} />
                    <EachBoard title={"Done"} tasks={done} />
                </div>

                <>
                    {eachTaskActive && (
                        <EachTaskModal
                            active={eachTaskActive}
                            task={tasks.filter((task) => task.id === idTask)[0]}
                            subTaskFlag={false}
                        />
                    )}
                </>
            </div>
        </DragDropContext>
    );
};
