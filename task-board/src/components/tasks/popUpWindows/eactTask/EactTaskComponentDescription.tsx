/** @format */

// /** @format */

import React, {useEffect, useRef, useState} from "react";
import {MdEditNote} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ITask} from "../../../interface/ITask";

interface IEactTaskComponentDescription {
    task: ITask;
    subTaskFlag: boolean;
}

export const EactTaskComponentDescription: React.FC<
    IEactTaskComponentDescription
> = ({task, subTaskFlag}) => {
    const dispatch = useDispatch();
    const certainProject = useLocation();
    const idTask = useTypedSelector((state) => state.idTask);

    const refDescription = useRef<HTMLTextAreaElement | null>(null);

    const [chekChangesDescription, setChekChangesDescription] =
        useState<boolean>(false);
    const [descriptonValue, setDescriptonValue] = useState<string>(
        task?.description ?? ""
    );
    const subTaskDescriptionValue = () => {
        return descriptonValue;
    };

    useEffect(() => {
        setChekChangesDescription(descriptonValue !== task?.description);
    }, [descriptonValue]);

    const saveChangeDescription = () => {
        subTaskFlag
            ? dispatch({
                  type: "CHANGE_DESCRIPTION_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTask: task,
                      description: descriptonValue,
                  },
              })
            : dispatch({
                  type: "CHANGE_DESCRIPTION_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      task: task,
                      description: descriptonValue,
                  },
              });

        setChekChangesDescription(false);
    };

    return (
        <div className='container'>
            <div className='headerDecription'>
                <p>Description</p>
                <MdEditNote
                    className='changeIcon'
                    onClick={() => {
                        refDescription !== null &&
                            refDescription.current?.focus();
                    }}
                />
            </div>
            <textarea
                ref={refDescription}
                value={subTaskDescriptionValue()}
                className='description'
                onChange={(e) => {
                    setDescriptonValue(e.target.value);
                }}></textarea>
            {chekChangesDescription && (
                <button className='saveButton' onClick={saveChangeDescription}>
                    save
                </button>
            )}
        </div>
    );
};
