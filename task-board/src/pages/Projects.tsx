/** @format */

import React, {useEffect, useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {EachProject} from "../components/projects/EachProject";
import "../styles/createNewModal.scss";
// import {dataProject} from "../components/offlineData";
import {AboutMe} from "../components/footer/footer";
import {CreateNewProject} from "../components/projects/CreateNewProject";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

export const Projects: React.FC = () => {
    const [createNewProjectModal, setCreateNewProjectModal] =
        useState<boolean>(false);

    const dataProject = useTypedSelector((state) => state.projects);

    //  useEffect(() => {

    //  }, );

    return (
        <div className='body'>
            <div className='wrapper'>
                <header className='header'>Task Board</header>
                <main className='main'>
                    <ButtonAdd
                        setActive={setCreateNewProjectModal}
                        text='Create new project'
                    />
                    <CreateNewProject
                        active={createNewProjectModal}
                        setActive={setCreateNewProjectModal}
                    />
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
        </div>
    );
};
