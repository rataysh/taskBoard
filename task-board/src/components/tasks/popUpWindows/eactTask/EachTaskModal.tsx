/** @format */

import React, {useEffect, useState} from "react";
import {GrClose} from "react-icons/gr";
import {ITask} from "../../../interface/ITask";
import "../../../../styles/eachTaskModal.scss";
import {SubTask} from "./SubTask";
import {SideBar} from "./SideBar";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useLocation} from "react-router-dom";
import {EachTaskComponetHeader} from "./EachTaskComponetHeader";
import {EactTaskComponentDescription} from "./EactTaskComponentDescription";
import {EactTaskComponentComment} from "./EactTaskComponentComment";

interface IEachTaskModal {
    task?: ITask;
    active: boolean;
    setActive?: (active: boolean) => void;
    subTaskFlag: boolean;
}

export const EachTaskModal: React.FC<IEachTaskModal> = ({
    task,
    active,
    setActive,
    subTaskFlag,
}) => {
    const [subTaskActive, setSubTaskActive] = useState<boolean>(false);
    const dispatch = useDispatch();

    const certainProject = useLocation();
    const allProject = useTypedSelector((state) => state.projects);
    const idTask = useTypedSelector((state) => state.idTask);
    const [eachProjectTasksSub, setEachProjectTasksSub] = useState<ITask>(
        allProject
            .filter((proj) => proj.id === certainProject.state.id)[0]
            .tasks.filter((tsk) => tsk.id === idTask)[0]
    );
    useEffect(() => {
        setEachProjectTasksSub(
            allProject
                .filter((proj) => proj.id === certainProject.state.id)[0]
                .tasks.filter((tsk) => tsk.id === idTask)[0]
        );
    }, [allProject]);

    // close modal
    const closeTask = () => {
        dispatch({
            type: "POP_UP_CLOSE_EACH_TASK",
        });
    };
    const closeSubTask = () => {
        dispatch({
            type: "SUB_TASK_RESET_ID",
        });
        setActive!(!active);
    };
    const closeModal = () => {
        subTaskFlag ? closeSubTask() : closeTask();
    };

    return (
        <div
            className={`${subTaskActive ? "open" : "modal__wrapper"} ${
                active ? "open" : "close"
            }`}>
            <div className='modalContainer'>
                <div className='modalBodyEach'>
                    <span onClick={() => closeModal()}>
                        <GrClose />
                    </span>

                    <main>
                        <EachTaskComponetHeader
                            task={task!}
                            subTaskFlag={subTaskFlag}
                        />
                        <SideBar task={task!} />
                        <EactTaskComponentDescription
                            subTaskFlag={subTaskFlag}
                            task={task!}
                        />

                        {/* Cheked this is sub-task or not */}
                        {subTaskFlag ? (
                            ""
                        ) : (
                            <SubTask
                                task={eachProjectTasksSub}
                                subTaskActive={subTaskActive}
                                setSubTaskActive={setSubTaskActive}
                            />
                        )}
                        <EactTaskComponentComment
                            task={task!}
                            subTaskFlag={subTaskFlag}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};
