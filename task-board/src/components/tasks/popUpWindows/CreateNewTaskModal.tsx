/** @format */

import React, {ChangeEvent, useState} from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {checkName} from "../../../logic/checkName";
import {newTask} from "../../../logic/newTask";
import {ITask} from "../../interface/ITask";
import {CreateNewTaskComponent} from "./CreateNewTaskComponent";
// import "../../../styles/createNewModal.scss";

interface ICreateNewTaskModal {
    active: boolean;
    setActive: (active: boolean) => void;
    tasks: ITask[];
    subFlag?: boolean;
    taskIdForSub?: number;
}

export const CreateNewTaskModal: React.FC<ICreateNewTaskModal> = ({
    active,
    setActive,
    tasks,
    subFlag,
    taskIdForSub,
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

    const createNewTask = (subFlag: boolean | undefined) => {
        console.log(taskIdForSub !== undefined ? tasks[taskIdForSub] : "UND");
        subFlag !== undefined && subFlag
            ? dispatch({
                  type: "ADD_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      task: tasks[taskIdForSub ?? 0],
                      subTask: newTask(
                          //   taskIdForSub !== undefined &&
                          //       tasks[taskIdForSub] !== undefined
                          //       ? tasks[taskIdForSub ?? 0].subTasks
                          //       : 0,
                          tasks[taskIdForSub ?? 0].subTasks ?? [].length >= 1
                              ? tasks[taskIdForSub ?? 0].subTasks ?? []
                              : 0,
                          name,
                          description,
                          precedence,
                          status
                      ),
                  },
              })
            : dispatch({
                  type: "ADD_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      task: newTask(
                          tasks.length >= 1 ? tasks : 0,
                          name,
                          description,
                          precedence,
                          status
                      ),
                  },
              });

        dispatch({
            type: "POP_UP_CLOSE_SUB_TASK",
        });
        setActive(!active);
        clearInput();
    };

    return (
        <>
            <div className={`modal_wrapper ${active ? "open" : "close"}`}>
                <div className='modalContainer'>
                    <div className='modalBody modalBodyTask'>
                        <span
                            onClick={() => {
                                dispatch({
                                    type: "POP_UP_CLOSE_SUB_TASK",
                                });
                                setActive(!active);
                            }}>
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
                            onClick={() => createNewTask(subFlag)}>
                            CREATE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
