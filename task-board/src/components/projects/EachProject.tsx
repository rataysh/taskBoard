/** @format */

import React from "react";
import {Link} from "react-router-dom";
import ".././../styles/addNewProjButton.scss";
import {IProject} from "./interface/IProject";

interface EachProjects {
    projectProps: IProject;
}

export const EachProject: React.FC<EachProjects> = (props) => {
    return (
        <Link
            to={`/tasks/${props.projectProps.id}`}
            style={{textDecoration: "none"}}
            className='eachProjectCard'>
            <div>
                <p>{props.projectProps.title}</p>
                <span>{props.projectProps.description}</span>
            </div>
        </Link>
    );
};
