/** @format */

import React, {useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {AboutMe} from "../components/footer/footer";
import {testTask} from "../components/offlineData";
import {CreateNewTaskModal} from "../components/tasks/CreateNewTaskModal";
import {TaskBoards} from "../components/tasks/TaskBoards";
import "../styles/projects.scss";
import "../styles/createNewModal.scss";
// import { ITask } from "../components/interface/ITask";
import {useLocation} from "react-router-dom";

// interface ITasks {
//     title: string;
//     tasks: ITask[];
// }

export const PageTasks: React.FC = () => {
    const [creatNewTaskModal, setCreatNewTaskModal] = useState<boolean>(false);
    const {state} = useLocation();

    return (
        <div className='body'>
            <div className='wrapper'>
                <header className='header'>{state[0]}</header>
                <main className='main'>
                    <div className='buttonAdd'>
                        <ButtonAdd
                            text='Add new task'
                            setActive={setCreatNewTaskModal}
                        />

                        <CreateNewTaskModal
                            active={creatNewTaskModal}
                            setActive={setCreatNewTaskModal}
                        />
                    </div>
                    <>
                        <TaskBoards tasks={state[1]} />
                    </>
                </main>
                <>
                    <AboutMe />
                </>
            </div>
        </div>
    );
};
