/** @format */

import React, {useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {EachProject} from "../components/projects/EachProject";
import "../styles/projects.scss";
import {AboutMe} from "../components/footer/footer";
import {CreateNewProjectModal} from "../components/projects/CreateNewProjectModal";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const PageProjects: React.FC = () => {
    const [createNewProjectModal, setCreateNewProjectModal] =
        useState<boolean>(false);

    const dataProject = useTypedSelector((state) => state.projects);

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
                        {dataProject.map((project) => (
                            <EachProject project={project} key={project.id} />
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
