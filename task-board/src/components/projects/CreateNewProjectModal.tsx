/** @format */

import React, {ChangeEvent, useState} from "react";
import "../../styles/createNewProjectModal.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {idAdd} from "../../logic/idAdd";
import { checkDescription } from "../../logic/checkDescription";
import { checkName } from "../../logic/checkName";

interface ICreateNewProjectModal {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const CreateNewProjectModal: React.FC<ICreateNewProjectModal> = ({
    active,
    setActive,
}) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    // check condition for UNLOCK button "Creeat new project"
    const [valid, setValid] = useState<boolean>(false);
    //  all previous redux projects for CREATE NEW ID
    const dataProject = useTypedSelector((state) => state.projects);

    const dispatch = useDispatch();

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
    };

    const createNewProject = () => {
        dispatch({
            type: "ADD_PROJECT",
            payload: {
                id: idAdd(dataProject),
                title: name,
                description: checkDescription(description),
                status: 0,
                tasks: [],
            },
        });
        setActive(!active);
        clearInput();
    };

    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <div className='modalBodyCreateNewProject'>
                <span
                    onClick={() => {
                        clearInput();
                        setActive(!active);
                    }}>
                    <GrClose />
                </span>

                <div>
                    <p>Project name</p>
                    <input
                        value={name}
                        onChange={inputName}
                        required
                        type='text'
                        placeholder='My project'></input>
                </div>
                <div>
                    <p>Description</p>
                    <textarea
                        value={description}
                        onChange={inputDiscription}
                        placeholder='My project description...'></textarea>
                </div>

                <button
                    disabled={!valid}
                    className='effect'
                    onClick={createNewProject}>
                    CREATE
                </button>
            </div>
        </div>
    );
};
