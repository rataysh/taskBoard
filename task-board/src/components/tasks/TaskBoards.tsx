/** @format */

import React, {useState} from "react";
import "../../styles/tasksBoard.scss";
import {ITask} from "../interface/ITask";
// import {EachTask} from "./EachTask";
import {EachTaskModal} from "./popUpWindows/EachTaskModal";
import {EachBoard} from "./EachBoard";
// import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface ITaskBoards {
    tasks: ITask[];
}

export const TaskBoards: React.FC<ITaskBoards> = ({tasks}) => {
    // const [eachTaskModalActive, setEachTaskModalActive] =
    //     useState<boolean>(false);
    // const dispatch = useDispatch();
    const eachTaskActive = useTypedSelector((state) => state.modalView);
    const modalTask = useTypedSelector((state) => state.eachTask);

    const createEachBoard = (tasks: ITask[], status: number) => {
        let boardTitle = "";
        status === 0
            ? (boardTitle = "Queue")
            : status === 1
            ? (boardTitle = "Development")
            : (boardTitle = "Done");

        return tasks.length > 0 ? (
            <EachBoard title={boardTitle} tasks={tasks} />
        ) : (
            <EachBoard title={boardTitle} tasks={[]} />
        );
    };

    return (
        <>
            <div className='allBoard'>
                <div className='eachBoard'>
                    {createEachBoard(
                        tasks.filter((task) => task.status === 0),
                        0
                    )}
                </div>
                <div className='eachBoard'>
                    {createEachBoard(
                        tasks.filter((task) => task.status === 1),
                        1
                    )}
                </div>
                <div className='eachBoard'>
                    {createEachBoard(
                        tasks.filter((task) => task.status === 2),
                        2
                    )}
                </div>
            </div>
            <>
                {eachTaskActive && modalTask.length > 0 && (
                    <EachTaskModal
                        active={eachTaskActive}
                        task={modalTask[0]}
                        subTaskFlag={false}
                    />
                )}
            </>
        </>
    );
};
