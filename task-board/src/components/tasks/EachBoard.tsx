/** @format */

import React from "react";
import {Droppable} from "react-beautiful-dnd";
import {ITask} from "../interface/ITask";
import {EachTask} from "./EachTask";

interface IEachBoard {
    title: string;
    tasks: ITask[];
}

export const EachBoard: React.FC<IEachBoard> = ({tasks, title}) => {
    return (
        <Droppable droppableId={title}>
            {(provided) => (
                <div
                    className='eachBoard'
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    <h3>{title}</h3>
                    {tasks.sort((a, b) => a.index! > b.index! ? 1 : -1).map((task: ITask, index) => {
                        return (
                            <EachTask task={task} key={task.id} index={index} />
                        );
                    })}

                    {/* {provided.placeholder} */}
                </div>
            )}
        </Droppable>
    );
};
