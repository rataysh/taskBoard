/** @format */

import React, {useEffect, useState} from "react";
import {GrClose} from "react-icons/gr";
import {MdPlaylistAdd} from "react-icons/md";
import {useDispatch} from "react-redux";
import {ITask} from "../../../interface/ITask";
import {SubTaskModal} from "../SubTaskModal";
import "../../../../styles/eachTaskModal.scss";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

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
    const dispatch = useDispatch();
    const certainProject = useLocation();

    //For SUB-TASK
    const idSubTask = useTypedSelector((state) => state.idSubTask);
    const [idSub, setIdSub] = useState<number | null>(null);
    useEffect(() => {
        setIdSub(idSubTask);
    }, [idSubTask]);

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

    const createNewSubTaskModal = () => {
        dispatch({
            type: "POP_UP_OPEN_SUB_TASK",
        });
    };
    const openSubTask = (sub: ITask) => {
        dispatch({
            type: "SUB_TASK_GET_ID",
            payload: sub.id,
        });
        setIdSub(idSubTask);
        setSubTaskActive(!subTaskActive);
    };

    return (
        <>
            <div className='displaySub'>
                <div className='eachSub'>
                    <div className='subHeaderText'>Sub-tasks</div>
                    <div className='closeIcon'>
                        <MdPlaylistAdd
                            className='subHeaderText'
                            onClick={createNewSubTaskModal}
                        />
                    </div>
                </div>
                <div className='sub'>
                    {(task.subTasks?.length ?? 0) > 0 &&
                        task.subTasks?.map((sub) => (
                            <>
                                <div
                                    className='eachSub'
                                    key={`sub+${task.title}+${sub.id}`}>
                                    <div
                                        onClick={() => {
                                            openSubTask(sub);
                                        }}>
                                        {sub.title}
                                    </div>
                                    <div className='closeIcon'>
                                        <GrClose
                                            onClick={() => delSubTask(sub)}
                                        />
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
            </div>
        </>
    );
};
