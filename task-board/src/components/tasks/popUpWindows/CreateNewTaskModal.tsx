/** @format */

import React, {ChangeEvent, useState} from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {checkName} from "../../../logic/checkName";
import {newTask} from "../../../logic/newTask";
import {ITask} from "../../interface/ITask";
import {CreateNewTaskComponent} from "./CreateNewTaskComponent";
import "../../../styles/createNewModal.scss"

interface ICreateNewTaskModal {
    active: boolean;
    setActive: (active: boolean) => void;
    tasks: ITask[];
    subFlag?: boolean;
}

export const CreateNewTaskModal: React.FC<ICreateNewTaskModal> = ({
    active,
    setActive,
    tasks,
    subFlag,
}) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [precedence, setPrecedence] = useState<string>("low");
    const [status, setStatus] = useState<number>(0);
    // check condition for UNLOCK button "Creeat new project"
    const [valid, setValid] = useState<boolean>(false);

    const dispatch = useDispatch();
    const certainProject = useLocation();

    const inputName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        //  Check correct name for projects and unlock button
        checkName(name) ? setValid(true) : setValid(false);
    };

    const inputDiscription = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const clearInput = () => {
        setDescription("");
        setName("");
        setValid(false);
        setPrecedence("low");
        setStatus(0);
    };

    const createNewTask = () => {
        dispatch({
            type: "ADD_TASK",
            payload: {
                projectId: certainProject.state.id,
                task: newTask(tasks, name, description, precedence, status),
            },
        });

        setActive(!active);
        clearInput();
    };

    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <div className='modalContainer'>
                <div className='modalBody modalBodyTask'>
                    <span onClick={() => setActive(!active)}>
                        <GrClose />
                    </span>
                    <CreateNewTaskComponent
                        name={name}
                        description={description}
                        changeName={inputName}
                        changeDescription={inputDiscription}
                        setPrecedence={setPrecedence}
                        setStatus={setStatus}
                    />
                    <button
                        disabled={!valid}
                        className='effect'
                        onClick={createNewTask}>
                        CREATE
                    </button>
                </div>
            </div>
        </div>
    );
};
