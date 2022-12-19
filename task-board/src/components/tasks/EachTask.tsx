/** @format */

import React from "react";
import {BsCalendar} from "react-icons/bs";
import {useDispatch} from "react-redux";
// import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ITask} from "../interface/ITask";
// import {EachTaskModal} from "./EachTaskModal";

interface IEachTask {
    task: ITask;
}

export const EachTask: React.FC<IEachTask> = ({task}) => {
    const dispatch = useDispatch();
    // const eachTaskActive = useTypedSelector((state) => state.modalView);
    // const testTask = useTypedSelector((state) => state.eachTask);

    return (
        <div
            onClick={() => {
                dispatch({
                    type: "GET_ID_EACH_TASK",
                    payload: task,
                });
                dispatch({
                    type: "POP_UP_OPEN_EACH_TASK",
                });
                // console.log(eachTaskActive);
                // console.log(testTask);
            }}>
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
    );
};
