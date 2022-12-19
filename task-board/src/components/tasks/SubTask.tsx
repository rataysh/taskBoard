/** @format */

import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {ITask} from "../interface/ITask";
import {SubTaskModal} from "./SubTaskModal";

interface IEachSubTask {
    task: ITask;
    subTaskActive: boolean;
    setSubTaskActive: (active: boolean) => void;
}

export const SubTask: React.FC<IEachSubTask> = ({
    task,
    subTaskActive,
    setSubTaskActive,
}) => {
    const [idSub, setIdSub] = useState<number | null>(null);

    return (
        <div className='sub'>
            <p>Sub-tasks:</p>
            {(task.subTasks?.length ?? 0) > 0
                ? task.subTasks?.map((sub) => (
                      <>
                          <div className='eachSub'>
                              <div
                                  key={sub.id}
                                  onClick={() => {
                                      setIdSub(sub.id);
                                      setSubTaskActive(!subTaskActive);
                                  }}>
                                  {sub.title}
                              </div>
                              <div className='closeIcon' onClick={() => {}}>
                                  <GrClose />
                              </div>
                          </div>
                      </>
                  ))
                : "0"}
            <>
                {idSub !== null && (
                    <SubTaskModal
                        task={
                            task.subTasks!.filter((sub) => sub.id === idSub)[0]
                        }
                        subTaskActive={subTaskActive}
                        setSubTaskActive={setSubTaskActive}
                    />
                )}
            </>
        </div>
    );
};
