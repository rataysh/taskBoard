/** @format */

import React from "react";
import {ITask} from "../../interface/ITask";
import {EachTaskModal} from "./eactTask/EachTaskModal";

interface IEachSubTaskModal {
    task: ITask;
    subTaskActive: boolean;
    setSubTaskActive: (active: boolean) => void;
}

export const SubTaskModal: React.FC<IEachSubTaskModal> = ({
    task,
    subTaskActive,
    setSubTaskActive,
}) => {
    return (
        <div className='sub__task__wrapper'>
            <EachTaskModal
                task={task}
                active={subTaskActive}
                setActive={setSubTaskActive}
                subTaskFlag={true}
            />
        </div>
    );
};
