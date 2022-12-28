/** @format */

import React, {useEffect, useState} from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {AboutMe} from "../components/footer/footer";
import {CreateNewTaskModal} from "../components/tasks/popUpWindows/CreateNewTaskModal";
import {TaskBoards} from "../components/tasks/TaskBoards";
import "../styles/projects.scss";
import "../styles/createNewModal.scss";
import {Link, useLocation} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ITask} from "../components/interface/ITask";
import {DelConfirmModal} from "../components/DelConfirmModal";
import {MdKeyboardBackspace} from "react-icons/md";

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
    const chekTaskIdForSub = useTypedSelector((state) => state.idTask);
    const [taskIdForSub, setTaskIdForSub] = useState<number>(0);
    useEffect(() => {
        setTaskIdForSub(chekTaskIdForSub);
    }, [chekTaskIdForSub]);

    //Pop-up for confirm del Task
    const [modalDeleteTask, setModalDeleteTask] = useState<boolean>(false);
    const checkActiveModalDel = useTypedSelector(
        (state) => state.modalViewDelTask
    );
    useEffect(() => {
        setModalDeleteTask(checkActiveModalDel);
    }, [checkActiveModalDel]);

    // For get allProjects data into reducer
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
                <span className='back'>
                    <Link
                        to={`/`}
                        style={{textDecoration: "none"}}>
                        <MdKeyboardBackspace />
                    </Link>
                </span>
                <header className='header'>
                    <div className='title'>{project.state.title}</div>
                    <div className='description'>
                        {project.state.description}
                    </div>
                </header>
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
                        <DelConfirmModal
                            delItem={false}
                            active={modalDeleteTask}
                            setActive={setModalDeleteTask}
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
