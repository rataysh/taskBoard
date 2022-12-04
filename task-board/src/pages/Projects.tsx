/** @format */

import React from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {EachProject} from "../components/projects/EachProject";
import "../styles/projects.scss";
import {dataProject} from "../components/offlineData";
import {AboutMe} from "../components/footer/footer";

export const Projects: React.FC = () => {
    return (
        <body className='body'>
            <div className='wrapper'>
                <header className='header'>Task Board</header>
                <main className='main'>
                    <ButtonAdd text="Create new project"/>
                    <div className='projectsBox'>
                        {dataProject.map((projectProps) => (
                            <EachProject
                                projectProps={projectProps}
                                key={projectProps.id}
                            />
                        ))}
                    </div>
                </main>
                <>
                    <AboutMe />
                </>
            </div>
        </body>
    );
};
