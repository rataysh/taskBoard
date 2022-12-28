/** @format */

import React from "react";
import {Droppable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {ITask} from "../interface/ITask";
import {EachTask} from "./EachTask";

interface IEachBoard {
    title: string;
    tasks: ITask[];
}

export const EachBoard: React.FC<IEachBoard> = ({tasks, title}) => {
    // const dispatch = useDispatch();
    // const certainProject = useLocation();

    return (
        <Droppable droppableId={title}>
            {(provided) => (
                <div
                    className='eachBoard'
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    <h3>{title}</h3>
                    {tasks.map((task: ITask, index) => {
                        // dispatch({
                        //     type: "INDEX_CHANGE",
                        //     payload: {
                        //         projId: certainProject.state.id,
                        //         taskId: task.id,
                        //         index: index,
                        //     },
                        // });

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
