/** @format */

import React from "react";
import {Routes, Route} from "react-router-dom";
import {PageTasks} from "./pages/PageTasks";
import {PageProjects} from "./pages/PageProjects";
import {EachTaskModal} from "./components/tasks/EachTaskModal";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PageProjects />} />
                <Route path='tasks/:id' element={<PageTasks />} />
                {/* <Route path='tasks/:id/:title' element={<EachTaskPage />} /> */}
            </Routes>
        </>
    );
};

export default App;
