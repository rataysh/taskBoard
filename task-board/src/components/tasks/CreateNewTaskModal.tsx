/** @format */

import moment from "moment";
import React, {ChangeEvent, useState} from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {idAdd} from "../../logic/idAdd";
import {ITask} from "../interface/ITask";
import {dataProject} from "../offlineData";

interface ICreateNewTaskModal {
    active: boolean;
    setActive: (active: boolean) => void;
    tasks: ITask[];
}

export const CreateNewTaskModal: React.FC<ICreateNewTaskModal> = ({
    active,
    setActive,
    tasks,
}) => {
    const [name, setName] = useState<string>("");
    const [discription, setDiscription] = useState<string>("");
    // check condition for UNLOCK button "Creeat new project"
    const [valid, setValid] = useState<boolean>(false);
    //  all previous redux projects for CREATE NEW ID
    // const projectTasks = useTypedSelector((state) => state.taskBoardData);

    const dispatch = useDispatch();
    const certainProject = useLocation();

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

    const newTask = () => {
        return {
            id: 0, //idAdd(dataProject),
            title: name,
            description:
                discription === "" || discription.replace(/\s+/, "") === ""
                    ? "-"
                    : discription,
            dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
            precedence: "low",
            status: 0, // 0 - Queue 1 - Development 2 - Done
        };
    };

    const createNewTask = () => {
        // tasks.push(newTask());
        // testFunc();
        dispatch({
            type: "ADD_TASK",
            payload: {
                projectId: certainProject.state.id,
                task: newTask(),
            },
        });

        setActive(!active);
        clearInput();
    };

    // const testFunc = () => {
    //     for (let i = 0; i < dataProject.length; i++) {
    //         dataProject[i].id === certainProject.state.id &&
    //             dataProject[i].tasks.push(newTask());
    //     }
    // };

    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <div className='modalContainer'>
                <div className='modalBody modalBodyTask'>
                    {/* <button
                        onClick={() => {
                            testFunc();
                        }}>
                        sdaaaaaaaaa
                    </button> */}
                    <span onClick={() => setActive(!active)}>
                        <GrClose />
                    </span>
                    <div>
                        <p>Task name</p>
                        <input
                            value={name}
                            onChange={inputName}
                            type='text'
                            placeholder='My project'
                            required></input>
                    </div>
                    <div>
                        <p>Description</p>
                        <textarea
                            value={discription}
                            onChange={inputDiscription}
                            placeholder='My project description...'></textarea>
                    </div>
                    <div>
                        <p>Precedence</p>
                        <div className='radio'>
                            <input
                                id='radioPrecedence-1'
                                name='radioPrecedence'
                                type='radio'
                            />
                            <label htmlFor='radio-1' className='radio-label'>
                                Low
                            </label>
                        </div>

                        <div className='radio'>
                            <input
                                id='radioPrecedence-2'
                                name='radioPrecedence'
                                type='radio'
                            />
                            <label htmlFor='radio-2' className='radio-label'>
                                Medium
                            </label>
                        </div>

                        <div className='radio'>
                            <input
                                id='radioPrecedence-3'
                                name='radioPrecedence'
                                type='radio'
                            />
                            <label htmlFor='radio-3' className='radio-label'>
                                High
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Status</p>
                        <div className='radio'>
                            <input
                                id='radioStatus-1'
                                name='radioStatus'
                                type='radio'
                            />
                            <label htmlFor='radio-1' className='radio-label'>
                                Queue
                            </label>
                        </div>

                        <div className='radio'>
                            <input
                                id='radioStatus-2'
                                name='radioStatus'
                                type='radio'
                            />
                            <label htmlFor='radio-2' className='radio-label'>
                                Development
                            </label>
                        </div>

                        <div className='radio'>
                            <input
                                id='radioStatus-3'
                                name='radioStatus'
                                type='radio'
                            />
                            <label htmlFor='radio-3' className='radio-label'>
                                Done
                            </label>
                        </div>
                    </div>
                    <div className='file'>
                        <p>File</p>

                        <div className='containerFile'>
                            <form>
                                <div
                                    className='file-upload-wrapper'
                                    data-text='Select your file!'>
                                    <input
                                        name='file-upload-field'
                                        type='file'
                                        className='file-upload-field'
                                        value=''
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

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
