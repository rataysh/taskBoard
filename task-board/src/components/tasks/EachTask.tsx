/** @format */

import React, {useEffect, useState} from "react";
import {BsCalendar} from "react-icons/bs";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {ITask} from "../interface/ITask";

interface IEachTask {
    task: ITask;
}

export const EachTask: React.FC<IEachTask> = ({task}) => {
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

    // for precedence COLOR change
    const [precedence, setPrecedence] = useState(task?.precedence);
    const [colorPrecedence, setColorPrecedence] = useState("");
    useEffect(() => {
        setPrecedence(task?.precedence);
    }, [task?.precedence]);
    useEffect(() => {
        setColorPrecedence(
            precedence === "low"
                ? "#46f7b7"
                : precedence === "medium"
                ? "#F5EB88"
                : "#FFA775"
        );
    }, [precedence]);


    return (
        <>
            <div
                onClick={() => {
                    dispatch({
                        type: "POP_UP_OPEN_EACH_TASK",
                    });
                    dispatch({
                        type: "TASK_GET_ID",
                        payload: task.id,
                    });
                }}>
                <MdOutlineDeleteForever
                    className='del'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deleteTask();
                    }}
                />
                <h6 style={{backgroundColor: colorPrecedence}}>
                    {task?.precedence + " priority"}
                </h6>
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
