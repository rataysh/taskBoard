/** @format */

import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/eachProject.scss";
import {IProject} from "../interface/IProject";
import {MdOutlineDeleteForever} from "react-icons/md";
import {DelConfirmModal} from "../DelConfirmModal";
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
                to={`/taskBoard/tasks/${project.id}`}
                state={project}
                style={{textDecoration: "none"}}>
                <div className='eachProjectCard'>
                    <MdOutlineDeleteForever
                        className='del'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
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
                <DelConfirmModal
                    delItem={project}
                    active={active}
                    setActive={setActive}
                />
            </>
        </>
    );
};
