import React from 'react'
import { BsCalendar } from 'react-icons/bs';
import { ITask } from '../projects/interface/ITask';

interface EachTask {
    task: ITask;
}

export const EachTask:React.FC<EachTask> = (props) => {
  return (
      <div>
          <h6>{props.task.precedence + " priority"}</h6>
          <h4>{props.task.title}</h4>
          <h5>{props.task.description}</h5>
          <p>
              <BsCalendar />
              {props.task.dateCreate}
          </p>
      </div>
  );
}
