/** @format */

import React, {useEffect, useState} from "react";
import "../../styles/tasksBoard.scss";
import {ITask} from "../interface/ITask";
// import {EachTask} from "./EachTask";
import {EachTaskModal} from "./popUpWindows/eactTask/EachTaskModal";
import {EachBoard} from "./EachBoard";
// import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

interface ITaskBoards {
    tasks: ITask[];
}

export const TaskBoards: React.FC<ITaskBoards> = ({tasks}) => {
    // const dispatch = useDispatch();
    const eachTaskActive = useTypedSelector((state) => state.modalView);
    const idTask = useTypedSelector((state) => state.idTask);
    // const certainProject = useLocation();

    // const boardTasks = useTypedSelector((state) => state);

    // Filter state for status
    const [queue, setQueue] = useState<ITask[]>([]);
    const [develop, setDevelop] = useState<ITask[]>([]);
    const [done, setDone] = useState<ITask[]>([]);

    // useEffect(() => {
    //     setQueue(tasks.filter((task) => task.status === 0));
    //     setDevelop(tasks.filter((task) => task.status === 1));
    //     setDone(tasks.filter((task) => task.status === 2));
    // }, [tasks]);

    // useEffect(() => {
    //     for (let i = 0; i < queue.length; i++) {
    //         dispatch({
    //             type: "INDEX_CHANGE",
    //             payload: {
    //                 projId: certainProject.state.id,
    //                 taskId: queue[i].id,
    //                 index: i,
    //             },
    //         });
    //     }
    // }, [queue]);

    return (
        <>
            <div className='allBoard'>
                {/* <button
                    style={{zIndex: 50}}
                    onClick={() => {
                        console.log(queue);
                        // console.log(tasks.filter((task) => task.status === 0));
                    }}>
                    TTTTTTTTTTT
                </button> */}
                <EachBoard title={"Queue"} tasks={queue} />
                <EachBoard title={"Development"} tasks={develop} />
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
        </>
    );
};
