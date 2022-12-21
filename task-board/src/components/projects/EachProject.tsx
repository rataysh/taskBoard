/** @format */

import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/eachProject.scss";
import {IProject} from "../interface/IProject";
import {MdOutlineDeleteForever} from "react-icons/md";
import {DelConfirmProjectModal} from "./DelConfirmProjectModal";
import {useDispatch} from "react-redux";

interface IEachProjects {
    project: IProject;
}

export const EachProject: React.FC<IEachProjects> = ({project}) => {
    //  flag for modal window ACEPT or NOT del projects
    const [active, setActive] = useState<boolean>(false);

    const dispatch = useDispatch();

    return (
        <>
            <Link
                onClick={() => {
                    dispatch({
                        type: "GET_ALL_TASKS",
                        payload:
                            project.tasks?.length !== 0 ? project.tasks : [],
                    });
                }}
                to={`/tasks/${project.id}`}
                state={project}
                style={{textDecoration: "none"}}>
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

                    <div>
                        <p>{project.title}</p>
                        <p className='description'>{project.description}</p>
                    </div>
                </div>
            </Link>
            <>
                <DelConfirmProjectModal
                    project={project}
                    active={active}
                    setActive={setActive}
                />
            </>
        </>
    );
};
