/** @format */

import React, {useState} from "react";
import {BsCalendar} from "react-icons/bs";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch} from "react-redux";
// import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ITask} from "../interface/ITask";
import {DelConfirmProjectModal} from "../projects/DelConfirmProjectModal";
import {DelConfirmTaskModal} from "./popUpWindows/DelConfirmTaskModal";
// import {EachTaskModal} from "./EachTaskModal";

interface IEachTask {
    task: ITask;
}

export const EachTask: React.FC<IEachTask> = ({task}) => {
    const [delActive, setDelActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    // const eachTaskActive = useTypedSelector((state) => state.modalView);
    // const testTask = useTypedSelector((state) => state.eachTask);

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
                {/* <MdOutlineDeleteForever
                    className='del'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // // e.nativeEvent.stopImmediatePropagation();
                        setDelActive(!delActive);
                    }}
                /> */}
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
