/** @format */

import React from "react";
import {BsCalendar} from "react-icons/bs";
import "../../styles/tasks.scss";

export const EachTaskBoard: React.FC = () => {
    return (
        <div className='backBoard'>
            <h3>Queue</h3>
            <div>
                <h6>TAG PRIORITY</h6>
                <h5>
                    CARD TASK Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ad, error!
                </h5>
                <p>
                    <BsCalendar />
                    01.09.2022
                </p>
            </div>
        </div>
    );
};
