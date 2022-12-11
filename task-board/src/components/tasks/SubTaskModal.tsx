/** @format */

import React from "react";
import {ITask} from "../projects/interface/ITask";
import {EachTaskModal} from "./EachTaskModal";

interface IEachSubTaskModal {
    task: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const SubTaskModal: React.FC<IEachSubTaskModal> = ({
    task,
    active,
    setActive,
}) => {
    return (
        <div className='sub__task__wrapper'>
            <EachTaskModal
                task={task}
                active={active}
                setActive={setActive}
                subTaskFlag={true}
            />
        </div>
    );
};
