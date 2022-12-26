/** @format */

import React, {useEffect, useState} from "react";
import {MdEditNote} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ITask} from "../../../interface/ITask";

interface IEachTaskComponetHeader {
    task: ITask;
    subTaskFlag: boolean;
}

export const EachTaskComponetHeader: React.FC<IEachTaskComponetHeader> = ({
    task,
    subTaskFlag,
}) => {
    const dispatch = useDispatch();

    const certainProject = useLocation();
    const idTask = useTypedSelector((state) => state.idTask);

    const [checkChangeTitleFlag, setCheckChangeTitleFlag] =
        useState<boolean>(false);
    const [titleValue, setTitleValue] = useState<string>(task?.title ?? "");
    useEffect(() => {
        setCheckChangeTitleFlag(titleValue !== task?.title);
    }, [titleValue]);

    const saveChangeTitle = () => {
        subTaskFlag
            ? dispatch({
                  type: "CHANGE_TITLE_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTask: task,
                      title: titleValue,
                  },
              })
            : dispatch({
                  type: "CHANGE_TITLE_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      task: task,
                      title: titleValue,
                  },
              });

        setCheckChangeTitleFlag(false);
    };
    return (
        <header>
            <div className='head'>
                {checkChangeTitleFlag ? (
                    <div className='changeTitle'>
                        <textarea
                            onChange={(e) => setTitleValue(e.target.value)}>
                            {task?.title ?? ""}
                        </textarea>
                        <button onClick={saveChangeTitle}>save</button>
                    </div>
                ) : (
                    <p>{task?.title ?? ""}</p>
                )}

                <div>
                    <MdEditNote
                        className='changeIcon'
                        onClick={() => {
                            setCheckChangeTitleFlag(!checkChangeTitleFlag);
                        }}
                    />
                </div>
            </div>

            <div className='prior'>
                <p>{task?.precedence ?? "" + " priority"}</p>
                <MdEditNote className='changeIcon' onClick={() => {}} />
            </div>
        </header>
    );
};
