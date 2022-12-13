/** @format */

import React, {useState} from "react";
import "../../styles/tasksBoard.scss";
import {ITask} from "../interface/ITask";
import {EachTask} from "./EachTask";
import {EachTaskModal} from "./EachTaskModal";

interface EachTasks {
    tasks: ITask[];
}

export const TaskBoards: React.FC<EachTasks> = ({tasks: task}) => {
    const [eachTaskModalActive, setEachTaskModalActive] =
        useState<boolean>(false);

    return (
        <>
            <div className='allBoard'>
                <div className='eachBoard'>
                    <h3>Queue</h3>
                    {task
                        .filter((task) => task.status === 0)
                        .map((task) => (
                            <EachTask
                                active={eachTaskModalActive}
                                setActive={setEachTaskModalActive}
                                task={task}
                                key={task.id}
                            />
                        ))}
                </div>
                <div className='eachBoard'>
                    <h3>Development</h3>
                    {task
                        .filter((task) => task.status === 1)
                        .map((task) => (
                            <EachTask
                                active={eachTaskModalActive}
                                setActive={setEachTaskModalActive}
                                task={task}
                                key={task.id}
                            />
                        ))}
                </div>
                <div className='eachBoard'>
                    <h3>Done</h3>
                    {task
                        .filter((task) => task.status === 2)
                        .map((task) => (
                            <EachTask
                                active={eachTaskModalActive}
                                setActive={setEachTaskModalActive}
                                task={task}
                                key={task.id}
                            />
                        ))}
                </div>
            </div>
            <EachTaskModal
                task={task[0]}
                active={eachTaskModalActive}
                setActive={setEachTaskModalActive}
                subTaskFlag={false}
            />
        </>
    );
};
