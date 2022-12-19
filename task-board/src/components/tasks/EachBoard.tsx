/** @format */

import React from "react";
import {ITask} from "../interface/ITask";
import {EachTask} from "./EachTask";

interface IEachBoard {
    title: string;
    tasks: ITask[];
}

export const EachBoard: React.FC<IEachBoard> = ({tasks, title}) => {
    return (
        <>
            <h3>{title}</h3>
            {tasks.map((task: ITask) => (
                <EachTask
                    task={task}
                    key={task.id}
                />
            ))}
        </>
    );
};
