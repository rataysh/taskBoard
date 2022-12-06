/** @format */

import React from "react";
import "../../styles/projects.scss";
import { GrClose } from "react-icons/gr";

interface ActiveModal {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const CreateNewProject: React.FC<ActiveModal> = ({active, setActive}) => {
    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <div className='modalBody'>
                <span onClick={() => setActive(!active)}><GrClose/></span>
                <div>
                    <p>Project name:</p>
                    <input type='text' placeholder='My project' required></input>
                </div>
                <div>
                    <p>Description:</p>
                    <input placeholder='My project description...'></input>
                </div>
                <button className='effect'>CREATE</button>
            </div>
        </div>
    );
};
