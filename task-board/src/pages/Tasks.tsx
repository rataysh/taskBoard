/** @format */

import React, { useState } from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {AboutMe} from "../components/footer/footer";
import {testTask} from "../components/offlineData";
import { CreateNewTask } from "../components/tasks/CreateNewTask";
import {TaskBoards} from "../components/tasks/TaskBoards";
import "../styles/projects.scss";
import "../styles/createNewModal.scss";


export const Tasks: React.FC = () => {
    const [creatNewTaskModal, setCreatNewTaskModal] = useState<boolean>(false);

    return (
        <body className='body'>
            <div className='wrapper'>
                <header className='header'>Project Name</header>
                <main className='main'>
                    <div className='buttonAdd'>
                        <ButtonAdd
                            text='Add new task'
                            setActive={setCreatNewTaskModal}
                        />
                        <CreateNewTask
                            active={creatNewTaskModal}
                            setActive={setCreatNewTaskModal}
                        />
                    </div>
                    <>
                        <TaskBoards tasks={testTask} />
                    </>
                </main>
                <>
                    <AboutMe />
                </>
            </div>
        </body>
    );
};
