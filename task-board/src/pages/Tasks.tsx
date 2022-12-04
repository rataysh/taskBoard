/** @format */

import React from "react";
import {ButtonAdd} from "../components/ButtonAdd";
import {AboutMe} from "../components/footer/footer";
import {testTask} from "../components/offlineData";
import {TaskBoards} from "../components/tasks/TaskBoards";
import "../styles/projects.scss";
// import {Routes, Route, Link} from "react-router-dom";

export const Tasks: React.FC = () => {
    return (
        <body className='body'>
            <div className='wrapper'>
                <header className='header'>Project Name</header>
                <main className='main'>
                    <div className='buttonAdd'>
                        <ButtonAdd text='Add new task' />
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
