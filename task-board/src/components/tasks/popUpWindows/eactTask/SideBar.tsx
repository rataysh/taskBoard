/** @format */

import moment from "moment";
import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ITask} from "../../../interface/ITask";

interface ISideBar {
    task?: ITask;
}

export const SideBar: React.FC<ISideBar> = ({task}) => {
    const flagRefreshTime = useTypedSelector((state) => state.idTask);

    const [timeDuration, setTimeDuration] = useState<string>("");
    useEffect(() => {
        let timeTemp =
            moment(Date.now()).diff(task?.dateCreate, "days") > 0
                ? moment(Date.now()).diff(task?.dateCreate, "days") + " days"
                : moment(Date.now()).diff(task?.dateCreate, "hours") > 0
                ? moment(Date.now()).diff(task?.dateCreate, "hours") + " hours"
                : moment(Date.now()).diff(task?.dateCreate, "minutes") > 0
                ? moment(Date.now()).diff(task?.dateCreate, "minutes") + " min"
                : moment(Date.now()).diff(task?.dateCreate, "seconds") + " sec";
        setTimeDuration(timeTemp);
    }, [flagRefreshTime]);

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
                </div>
            </div>
            <div>
                <div className='divHead'>Create date</div>
                <div>{moment(task?.dateCreate).format("DD-MMM-YYYY")}</div>
            </div>
            <div>
                <div className='divHead'>Working time</div>
                <div>{timeDuration}</div>
            </div>
            <div>
                <div className='divHead'>End Date</div>
                <div>
                    {task?.status === 2
                        ? moment(Date.now()).format("DD-MMM-YYYY")
                        : "-"}
                </div>
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
