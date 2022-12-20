/** @format */

import React, {ChangeEvent, useState} from "react";
import "../../styles/createNewProjectModal.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {idAdd} from "../../logic/idAdd";

interface ICreateNewProjectModal {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const CreateNewProjectModal: React.FC<ICreateNewProjectModal> = ({
    active,
    setActive,
}) => {
    const [name, setName] = useState<string>("");
    const [discription, setDiscription] = useState<string>("");
    // check condition for UNLOCK button "Creeat new project"
    const [valid, setValid] = useState<boolean>(false);
    //  all previous redux projects for CREATE NEW ID
    const dataProject = useTypedSelector((state) => state.projects);

    const dispatch = useDispatch();

    const inputName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        //  Check correct name for projects and unlock button
        name !== "" && name.replace(/\s+/, "") !== ""
            ? setValid(true)
            : setValid(false);
    };

    const inputDiscription = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDiscription(event.target.value);
    };

    const clearInput = () => {
        setDiscription("");
        setName("");
        setValid(false);
    };

    const createNewProject = () => {
        dispatch({
            type: "ADD_PROJECT",
            payload: {
                id: idAdd(dataProject),
                title: name,
                description:
                    discription === "" || discription.replace(/\s+/, "") === ""
                        ? "-"
                        : discription,
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
                        value={discription}
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
