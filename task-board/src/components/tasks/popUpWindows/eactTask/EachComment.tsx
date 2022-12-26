/** @format */

import React from "react";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {IComment} from "../../../interface/ITask";

interface Comment {
    comment: IComment;
    subTaskFlag: boolean;
}

export const EachComment: React.FC<Comment> = ({comment, subTaskFlag}) => {
    const dispatch = useDispatch();
    const certainProject = useLocation();
    const idTask = useTypedSelector((state) => state.idTask);
    const idSubTask = useTypedSelector((state) => state.idSubTask);

    const deleteComment = () => {
        subTaskFlag
            ? dispatch({
                  type: "DELETE_COMMENT_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTaskId: idSubTask,
                      commentId: comment.id,
                  },
              })
            : dispatch({
                  type: "DELETE_COMMENT_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      commentId: comment.id,
                  },
              });
    };

    return (
        <div className='allCommentsContainer'>
            <p className='date'>{comment.dateCreate}</p>
            <div className='allComments'>
                <p>{comment.text}</p>
                <span
                    onClick={() => {
                        deleteComment();
                    }}>
                    <MdOutlineDeleteForever />
                </span>
            </div>
        </div>
    );
};
