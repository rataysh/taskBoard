/** @format */

import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {MdPlaylistAdd} from "react-icons/md";
import {useDispatch} from "react-redux";
import {ITask} from "../interface/ITask";
import {SubTaskModal} from "./popUpWindows/SubTaskModal";
import "../../styles/eachTaskModal.scss";
import {useLocation} from "react-router-dom";
import {CreateNewTaskModal} from "./popUpWindows/CreateNewTaskModal";

interface IEachSubTask {
    task: ITask;
    subTaskActive: boolean;
    setSubTaskActive: (active: boolean) => void;
}

export const SubTask: React.FC<IEachSubTask> = ({
    task,
    subTaskActive,
    setSubTaskActive,
}) => {
    const [idSub, setIdSub] = useState<number | null>(null);
    const [createNewSubTask, setCreateNewSubTask] = useState<boolean>(false);
    const dispatch = useDispatch();
    const certainProject = useLocation();

    const delSubTask = (subTask: ITask) => {
        dispatch({
            type: "DELETE_SUB_TASK",
            payload: {
                projectId: certainProject.state.id,
                task: task,
                subTask: subTask,
            },
        });
    };

    return (
        <div className='displaySub'>
            <div className='eachSub'>
                <div className='subHeaderText'>Sub-tasks</div>
                <div className='closeIcon'>
                    <MdPlaylistAdd
                        className='subHeaderText'
                        onClick={() => setCreateNewSubTask(!createNewSubTask)}
                    />
                </div>
            </div>
            <div className='sub'>
                {(task.subTasks?.length ?? 0) > 0 &&
                    task.subTasks?.map((sub) => (
                        <>
                            <div className='eachSub'>
                                <div
                                    key={sub.id}
                                    onClick={() => {
                                        setIdSub(sub.id);
                                        setSubTaskActive(!subTaskActive);
                                    }}>
                                    {sub.title}
                                </div>
                                <div className='closeIcon'>
                                    <GrClose onClick={() => delSubTask(sub)} />
                                </div>
                            </div>
                        </>
                    ))}

                <>
                    {idSub !== null && (
                        <SubTaskModal
                            task={
                                task.subTasks!.filter(
                                    (sub) => sub.id === idSub
                                )[0]
                            }
                            subTaskActive={subTaskActive}
                            setSubTaskActive={setSubTaskActive}
                        />
                    )}
                </>
            </div>
            <>
                <CreateNewTaskModal
                    active={createNewSubTask}
                    setActive={setCreateNewSubTask}
                    tasks={certainProject.state.tasks}
                    subFlag={true}
                />
            </>
        </div>
    );
};
