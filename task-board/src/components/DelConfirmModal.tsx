/** @format */

import React from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import "../styles/delProjModal.scss";
import {IProject} from "./interface/IProject";
import {ITask} from "./interface/ITask";

interface IDelConfirmModal {
    delItem: IProject | false;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const DelConfirmModal: React.FC<IDelConfirmModal> = ({
    delItem,
    active,
    setActive,
}) => {
    const dispatch = useDispatch();
    const idAndTask = useTypedSelector((state) => state.idForDelTask);

    const projectDelite = () => {
        dispatch({
            type: "DELETE_PROJECT",
            payload: delItem,
        });
        closeModal();
    };

    const taskDelite = () => {
        dispatch({
            type: "DELETE_TASK",
            payload: {
                projectId: idAndTask.projId,
                task: idAndTask.task,
            },
        });
        dispatch({
            type: "DEL_TASK_RESET_ID_AND_TASK",
        });
        closeModal();
    };

    const closeModal = () => {
        dispatch({
            type: "POP_UP_CLOSE_DEL_TASK",
        });
        delItem === false &&
            dispatch({
                type: "DEL_TASK_RESET_ID_AND_TASK",
            });
        setActive(!active);
    };

    return (
        <>
            <div className={`modal__wrapper ${active ? "open" : "close"}`}>
                <div className='modalContainerDel'>
                    <div className='modalBodyDelProject'>
                        <span onClick={() => closeModal()}>
                            <GrClose />
                        </span>

                        <p>
                            Are you sure you want to delete this{" "}
                            {delItem === false ? "task" : "project"}?
                        </p>

                        <div className='buttonBlock'>
                            <button
                                onClick={() => closeModal()}
                                className='effect'>
                                No
                            </button>
                            <button
                                onClick={() => {
                                    delItem === false
                                        ? taskDelite()
                                        : projectDelite();
                                }}
                                className='effect buttonYes'>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
