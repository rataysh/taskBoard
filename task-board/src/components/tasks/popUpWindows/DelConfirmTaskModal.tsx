/** @format */

import React from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import "../../../styles/delProjModal.scss";
import {ITask} from "../../interface/ITask";

interface IDelConfirmTaskModal {
    task: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const DelConfirmTaskModal: React.FC<IDelConfirmTaskModal> = ({
    task,
    active,
    setActive,
}) => {
    const dispatch = useDispatch();

    const taskDelete = () => {
        dispatch({
            type: "DELETE_PROJECT",
            payload: task,
        });
    };

    return (
        <>
            <div className={`modal__wrapper ${active ? "open" : "close"}`}>
                <div className='modalContainerDel'>
                    <div className='modalBodyDelProject'>
                        <span onClick={() => setActive(!active)}>
                            <GrClose />
                        </span>

                        <p>Are you sure you want to delete this task?</p>

                        <div className='buttonBlock'>
                            <button
                                onClick={() => setActive(!active)}
                                className='effect'>
                                No
                            </button>
                            <button
                                onClick={taskDelete}
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
