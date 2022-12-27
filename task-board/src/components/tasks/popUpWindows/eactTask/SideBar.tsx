/** @format */

import React from "react";
import {ITask} from "../../../interface/ITask";

interface ISideBar {
    task?: ITask;
}

export const SideBar: React.FC<ISideBar> = ({task}) => {
    return (
        <div className='sideBar'>
            <div>
                <div className='divHead'>Task number</div>
                <div>{task?.id ?? ""}</div>
            </div>
            <div>
                <div className='divHead'>Status</div>
                <div>
                    {task?.status === 0
                        ? "Queue"
                        : task?.status === 1
                        ? "Development"
                        : "Done"}

                    {/* <MdEditNote className='changeIcon' onClick={() => {}} /> */}
                </div>
            </div>
            <div>
                <div className='divHead'>Create date</div>
                <div>{task?.dateCreate}</div>
            </div>
            <div>
                <div className='divHead'>Working time</div>
                <div>{task?.dateCreate}</div>
            </div>
            <div>
                <div className='divHead'>End Date</div>
                <div>{task?.dateCreate}</div>
            </div>
            {/* <div>
                <div className='divHead'>Attached files</div>
                <div>
                    {0}
                    <MdAttachFile />
                </div>
            </div> */}
        </div>
    );
};
