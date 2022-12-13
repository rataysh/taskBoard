/** @format */

import React from "react";
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
                                      setSubTaskActive(!subTaskActive);
                                  }}>
                                  {sub.title}
                              </div>
                              <div className='closeIcon' onClick={() => {}}>
                                  <GrClose />
                              </div>
                          </div>
                          <>
                              <SubTaskModal
                                  task={sub}
                                  active={subTaskActive}
                                  setActive={setSubTaskActive}
                              />
                          </>
                      </>
                  ))
                : "0"}
        </div>
    );
};
