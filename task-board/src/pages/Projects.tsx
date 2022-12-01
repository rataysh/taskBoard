/** @format */

import React from "react";
import { AddNewProject } from "../components/projects/AddNewProject";
import { EachProject } from "../components/projects/EachProject";
import "../styles/projects.scss";

export const Projects: React.FC = () => {
    return (
        <div className='wrapper'>
            <header className="header">Task Board</header>
            <body>
                <AddNewProject />
                <EachProject />
            </body>
        </div>
    );
};
