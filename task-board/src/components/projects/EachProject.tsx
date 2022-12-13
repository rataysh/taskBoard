/** @format */

import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/eachProject.scss";
import {IProject} from "../interface/IProject";
import {MdOutlineDeleteForever} from "react-icons/md";
import {DelProjectModal} from "./DelProjectModal";
import Popup from "reactjs-popup";

interface IEachProjects {
    task: IProject;
}

export const EachProject: React.FC<IEachProjects> = ({task}) => {
    //  flag for modal window ACEPT or NOT del projects
    const [active, setActive] = useState<boolean>(false);

    return (
        <>
            <div className='eachProjectCard'>
                <MdOutlineDeleteForever
                    className='del'
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // e.nativeEvent.stopImmediatePropagation();
                        setActive(!active);
                    }}
                />

                <Link to={`/tasks/${task.id}`} style={{textDecoration: "none"}}>
                    <div>
                        <p>{task.title}</p>
                        <p className='description'>{task.description}</p>
                    </div>
                </Link>
            </div>
            <>
                <DelProjectModal
                    task={task}
                    active={active}
                    setActive={setActive}
                />
            </>
        </>
    );
};
