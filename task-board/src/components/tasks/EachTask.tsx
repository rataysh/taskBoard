/** @format */

import React from "react";
import {BsCalendar} from "react-icons/bs";
import {ITask} from "../projects/interface/ITask";

interface IEachTask {
    task: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const EachTask: React.FC<IEachTask> = ({task, active, setActive}) => {
    return (
        <div onClick={() => setActive(!active)}>
            <h6>{task.precedence + " priority"}</h6>
            <h4>{task.title}</h4>
            <h5>{task.description}</h5>
            <p>
                <BsCalendar />
                {task.dateCreate}
                <p>Sub-tasks:</p>
                {task.subTasks?.length ?? 0}
            </p>
        </div>
    );
};
