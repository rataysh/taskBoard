/** @format */

import React from "react";
import ".././../styles/addNewProjButton.scss";
import {IProject} from "./interface/IProject";

interface EachProjects {
    projectProps: IProject;
}

export const EachProject: React.FC<EachProjects> = (props) => {
    return (
        <div className='eachProjectCard'>
            <div>
                <p>{props.projectProps.title}</p>
                <span>{props.projectProps.description}</span>
            </div>
        </div>
    );
};
