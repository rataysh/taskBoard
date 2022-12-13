/** @format */

import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {MdEditNote} from "react-icons/md";
import {ITask} from "../interface/ITask";
import "../../styles/eachTaskModal.scss";
import {EachComment} from "./EachComment";
import {SubTask} from "./SubTask";
import {SideBar} from "./SideBar";

interface IEachTaskModal {
    task: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
    subTaskFlag: boolean;
}

export const EachTaskModal: React.FC<IEachTaskModal> = ({
    task,
    active,
    setActive,
    subTaskFlag,
}) => {
    const [subTaskActive, setSubTaskActive] = useState<boolean>(false);

    return (
        <div
            className={`${subTaskActive ? "open" : "modal__wrapper"} ${
                active ? "open" : "close"
            }`}>
            <div className='modalContainer'>
                <div className='modalBodyEach'>
                    <span onClick={() => setActive(!active)}>
                        <GrClose />
                    </span>

                    <main>
                        <header>
                            <div className='head'>
                                <p>{task.title}</p>
                                <MdEditNote
                                    className='changeIcon'
                                    onClick={() => {}}
                                />
                            </div>

                            <div className='prior'>
                                <p>{task.precedence + " priority"}</p>
                                <MdEditNote
                                    className='changeIcon'
                                    onClick={() => {}}
                                />
                            </div>
                        </header>
                        <SideBar task={task} />

                        <div className='container'>
                            <div className='headerDecription'>
                                <p>Description</p>
                                <MdEditNote
                                    className='changeIcon'
                                    onClick={() => {}}
                                />
                            </div>
                            <div className='description' onClick={() => {}}>
                                <p>{task.description}</p>
                            </div>
                        </div>

                        {/* Cheked this is sub-task or task */}
                        {subTaskFlag ? (
                            ""
                        ) : (
                            <SubTask
                                task={task}
                                subTaskActive={subTaskActive}
                                setSubTaskActive={setSubTaskActive}
                            />
                        )}
                        <div className='comments'>
                            <p>Comments</p>
                            <textarea placeholder='Write you comment...'></textarea>

                            {(task.comments?.length ?? 0) > 0
                                ? task.comments?.map((comment) => (
                                      <EachComment
                                          key={comment.id}
                                          comment={comment}
                                      />
                                  ))
                                : ""}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};
