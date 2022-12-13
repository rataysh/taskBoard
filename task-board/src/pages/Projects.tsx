/** @format */

import React, {useEffect, useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {EachProject} from "../components/projects/EachProject";
import "../styles/projects.scss";
// import {dataProject} from "../components/offlineData";
import {AboutMe} from "../components/footer/footer";
import {CreateNewProjectModal} from "../components/projects/CreateNewProjectModal";
import {useTypedSelector} from "../hooks/useTypedSelector";
// import {useDispatch} from "react-redux";

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

                    <div className='projectsBox'>
                        {dataProject.map((projectProps) => (
                            <EachProject
                                task={projectProps}
                                key={projectProps.id}
                            />
                        ))}
                    </div>
                </main>
                <CreateNewProjectModal
                    active={createNewProjectModal}
                    setActive={setCreateNewProjectModal}
                />
                <>
                    <AboutMe />
                </>
            </div>
        </div>
    );
};
