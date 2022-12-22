/** @format */

import React, {useEffect, useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {AboutMe} from "../components/footer/footer";
import {CreateNewTaskModal} from "../components/tasks/popUpWindows/CreateNewTaskModal";
import {TaskBoards} from "../components/tasks/TaskBoards";
import "../styles/projects.scss";
import "../styles/createNewModal.scss";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ITask} from "../components/interface/ITask";

export const PageTasks: React.FC = () => {
    const [creatNewTaskModal, setCreatNewTaskModal] = useState<boolean>(false);
    const project = useLocation();

    // For create new sub-task
    // active modal view
    const chekSubTaskModal = useTypedSelector((state) => state.subTaskView);
    const [createNewSubTask, setCreateNewSubTask] = useState<boolean>(false);
    useEffect(() => {
        setCreateNewSubTask(chekSubTaskModal);
    }, [chekSubTaskModal]);
    // id task
    const chekTaskIdForSub = useTypedSelector((state) => state.idForSubTask);
    const [taskIdForSub, setTaskIdForSub] = useState<number>(0);
    useEffect(() => {
        setTaskIdForSub(chekTaskIdForSub);
    }, [chekTaskIdForSub]);

    const allProject = useTypedSelector((state) => state.projects);
    const [eachProjectTasks, setEachProjectTasks] = useState<ITask[]>([]);

    useEffect(() => {
        let eachProject: ITask[] = allProject.filter(
            (proj) => proj.id === project.state.id
        )[0].tasks;
        setEachProjectTasks(eachProject);
    }, [allProject]);

    return (
        <div className='body'>
            <div className='wrapper'>
                <header className='header'>{project.state.title}</header>
                <main className='main'>
                    <div className='buttonAdd'>
                        <ButtonAdd
                            text='Add new task'
                            setActive={setCreatNewTaskModal}
                        />
                        <CreateNewTaskModal
                            tasks={eachProjectTasks}
                            active={creatNewTaskModal}
                            setActive={setCreatNewTaskModal}
                        />
                        <CreateNewTaskModal
                            active={createNewSubTask}
                            setActive={setCreateNewSubTask}
                            tasks={eachProjectTasks}
                            taskIdForSub={taskIdForSub}
                            subFlag={true}
                        />
                    </div>
                    <>
                        <TaskBoards tasks={eachProjectTasks} />
                    </>
                </main>
                <>
                    <AboutMe />
                </>
            </div>
        </div>
    );
};
