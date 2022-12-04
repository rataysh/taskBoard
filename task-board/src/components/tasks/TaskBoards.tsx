/** @format */

import React from "react";
import "../../styles/tasks.scss";
import {ITask} from "../projects/interface/ITask";
import {EachTask} from "./EachTask";

interface EachTasks {
    tasks: ITask[];
}

export const TaskBoards: React.FC<EachTasks> = ({tasks: task}) => {
    return (
        <div className='allBoard'>
            <div className='eachBoard'>
                <h3>Queue</h3>
                {task
                    .filter((task) => task.status === 0)
                    .map((task) => (
                        <EachTask task={task} key={task.id} />
                    ))}
            </div>
            <div className='eachBoard'>
                <h3>Development</h3>
                {task
                    .filter((task) => task.status === 1)
                    .map((task) => (
                        <EachTask task={task} key={task.id} />
                    ))}
            </div>
            <div className='eachBoard'>
                <h3>Done</h3>
                {task
                    .filter((task) => task.status === 2)
                    .map((task) => (
                        <EachTask task={task} key={task.id} />
                    ))}
            </div>
        </div>
    );
};
