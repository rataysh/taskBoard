/** @format */

import React from "react";
import {MdOutlineDeleteForever} from "react-icons/md";
import {IComment} from "../projects/interface/ITask";

interface Comment {
    comment: IComment;
}

export const EachComment: React.FC<Comment> = ({comment}) => {
    return (
        <div className="allCommentsContainer">
            <p className='date'>{comment.dateCreate}</p>
            <div className='allComments'>
                <p>{comment.text}</p>
                <span onClick={() => {}}>
                    <MdOutlineDeleteForever />
                </span>
            </div>
        </div>
    );
};
