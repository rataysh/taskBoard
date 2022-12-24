/** @format */

import React, {useState} from "react";
import {BsCalendar} from "react-icons/bs";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {ITask} from "../interface/ITask";

interface IEachTask {
    task: ITask;
}

export const EachTask: React.FC<IEachTask> = ({task}) => {
    // const [delActive, setDelActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    const certainProject = useLocation();

    const deleteTask = () => {
        dispatch({
            type: "DEL_TASK_GET_ID_AND_TASK",
            payload: {
                projId: certainProject.state.id,
                task: task,
            },
        });
        dispatch({
            type: "POP_UP_OPEN_DEL_TASK",
        });
    };

    return (
        <>
            <div
                onClick={() => {
                    dispatch({
                        type: "GET_EACH_TASK",
                        payload: task,
                    });
                    dispatch({
                        type: "POP_UP_OPEN_EACH_TASK",
                    });
                    // console.log(eachTaskActive);
                    // console.log(testTask);
                }}>
                <MdOutlineDeleteForever
                    className='del'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteTask();
                    }}
                />
                <h6>{task.precedence + " priority"}</h6>
                <h4>{task.title}</h4>
                <h5>{task.description}</h5>
                <article>
                    <p>
                        <BsCalendar />
                        {task.dateCreate}
                    </p>
                    <p>
                        <span>Sub-tasks:</span>
                        {task.subTasks?.length ?? 0}
                    </p>
                </article>
            </div>
        </>
    );
};
