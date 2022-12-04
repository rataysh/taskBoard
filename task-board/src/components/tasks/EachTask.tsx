/** @format */

import React from "react";
import {BsCalendar} from "react-icons/bs";
import {ITask} from "../projects/interface/ITask";

interface IEachTask {
    task: ITask;
}

export const EachTask: React.FC<IEachTask> = ({task}) => {
    return (
        <div>
            <h6>{task.precedence + " priority"}</h6>
            <h4>{task.title}</h4>
            <h5>{task.description}</h5>
            <p>
                <BsCalendar />
                {task.dateCreate}
            </p>
        </div>
    );
};
