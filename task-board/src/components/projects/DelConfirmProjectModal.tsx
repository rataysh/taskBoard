/** @format */

import React from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import "../../styles/delProjModal.scss";
import {IProject} from "../interface/IProject";
import {ITask} from "../interface/ITask";

interface IDelConfirmProjectModal {
    project: IProject;
    // task?: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const DelConfirmProjectModal: React.FC<IDelConfirmProjectModal> = ({
    project,
    // task,
    active,
    setActive,
}) => {
    const dispatch = useDispatch();

    const projectDelite = () => {
        dispatch({
            type: "DELETE_PROJECT",
            payload: project,
        });
    };

    // const taskDelite = () => {
    //     dispatch({
    //         type: "DELETE_PROJECT",
    //         payload: task,
    //     });
    // };

    return (
        <>
            <div className={`modal__wrapper ${active ? "open" : "close"}`}>
                <div className='modalContainerDel'>
                    <div className='modalBodyDelProject'>
                        <span onClick={() => setActive(!active)}>
                            <GrClose />
                        </span>

                        <p>Are you sure you want to delete this project?</p>

                        <div className='buttonBlock'>
                            <button
                                onClick={() => setActive(!active)}
                                className='effect'>
                                No
                            </button>
                            <button
                                onClick={projectDelite}
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
