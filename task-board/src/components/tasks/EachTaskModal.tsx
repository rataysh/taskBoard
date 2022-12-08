/** @format */

import React from "react";
import {GrClose} from "react-icons/gr";
import {ITask} from "../projects/interface/ITask";
import "../../styles/eachTaskModal.scss";

interface IEachTaskModal {
    task: ITask;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const EachTaskModal: React.FC<IEachTaskModal> = ({
    task,
    active,
    setActive,
}) => {
    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <body className='modalBodyEach'>
                <span onClick={() => setActive(!active)}>
                    <GrClose />
                </span>

                <main>
                    <div>
                        <p>{task.precedence + " priority"}</p>
                        <button>change</button>
                    </div>
                    <div>
                        <p>{task.title}</p>
                        <button>change</button>
                    </div>
                    <div>
                        <p>{task.description}</p>
                        <button>change</button>
                    </div>
                    <div>
                        <p>Sub-tasks:</p>
                        <p>WIDGET FOR SUB-TASKS</p>
                    </div>
                    <div>
                        <p>Coments</p>
                        <p>WIDGET FOR COMENTS</p>
                    </div>
                </main>

                <div>
                    <div>
                        <p> Task number</p>
                        <p>{task.id}</p>
                    </div>
                    <div>
                        <p>Create data</p>
                        <p>{task.dateCreate}</p>
                    </div>
                    <div>
                        <p>Working time</p>
                        <p>{task.dateCreate}</p>
                    </div>
                    <div>
                        <p>End Date</p>
                        <p>{task.dateCreate}</p>
                    </div>
                    <div>
                        <p>Attached files</p>
                        <p>{0}</p>
                        <button>add</button>
                    </div>
                    <div>
                        <p>Current status</p>
                        <p>
                            {task.status === 0
                                ? "Queue"
                                : task.status === 1
                                ? "Development"
                                : "Done"}
                        </p>
                        <button>change</button>
                    </div>
                </div>
            </body>
        </div>
    );
};
