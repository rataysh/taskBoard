/** @format */

import moment from "moment";
import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {idAdd} from "../../../../logic/idAdd";
import {ITask} from "../../../interface/ITask";
import {EachComment} from "./EachComment";

interface IEactTaskComponentComment {
    task?: ITask;
    subTaskFlag: boolean;
}

export const EactTaskComponentComment: React.FC<IEactTaskComponentComment> = ({
    task,
    subTaskFlag,
}) => {
    const dispatch = useDispatch();
    const certainProject = useLocation();
    const idTask = useTypedSelector((state) => state.idTask);
    const idSubTask = useTypedSelector((state) => state.idSubTask);

    const [commentValue, setCommentValue] = useState<string>("");

    const clearInput = () => {
        setCommentValue("");
    };

    const saveComment = () => {
        subTaskFlag
            ? dispatch({
                  type: "ADD_COMMENT_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTaskId: idSubTask,
                      comment: {
                          id:
                              task?.comments === undefined
                                  ? 0
                                  : idAdd(task.comments),
                          text: commentValue,
                          dateCreate: moment(Date.now()).format(
                              "MMMM Do YYYY, h:mm:ss a"
                          ),
                      },
                  },
              })
            : dispatch({
                  type: "ADD_COMMENT_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      comment: {
                          id:
                              task?.comments === undefined
                                  ? 0
                                  : idAdd(task?.comments),
                          text: commentValue,
                          dateCreate: moment(Date.now()).format(
                              "MMMM Do YYYY, h:mm:ss a"
                          ),
                      },
                  },
              });
        clearInput();
    };

    return (
        <div className='comments'>
            <p>Comments</p>

            <div className='commentMain'>
                <textarea
                    placeholder='Write you comment...'
                    value={commentValue}
                    onChange={(e) => {
                        setCommentValue(e.target.value);
                    }}></textarea>
                {commentValue !== "" && (
                    <>
                        <span
                            onClick={() => {
                                clearInput();
                            }}>
                            <GrClose />
                        </span>

                        <button
                            onClick={() => {
                                saveComment();
                            }}>
                            save
                        </button>
                    </>
                )}
            </div>
            {task?.comments !== undefined &&
                task?.comments?.length !== 0 &&
                task?.comments
                    .slice(0)
                    .reverse()
                    .map((comment) => (
                        <EachComment
                            key={`comment+${task.title}+${comment.id}`}
                            comment={comment}
                            subTaskFlag={subTaskFlag}
                        />
                    ))}
        </div>
    );
};
