/** @format */

import React from "react";
import {AboutMe} from "../components/footer/footer";
import {EachTaskBoard} from "../components/tasks/EachTaskBoard";
import "../styles/projects.scss";
// import {Routes, Route, Link} from "react-router-dom";

export const Tasks: React.FC = () => {
    return (
        <body className='body'>
            <div className='wrapper'>
                <header className='header'>Project Name</header>
                <main className='main'>
                    <div>
                        <EachTaskBoard />
                    </div>
                </main>
                <>
                    <AboutMe />
                </>
            </div>
        </body>
    );
};
