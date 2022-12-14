/** @format */

import React from "react";
import {Routes, Route} from "react-router-dom";
import {PageTasks} from "./pages/PageTasks";
import {PageProjects} from "./pages/PageProjects";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/taskBoard' element={<PageProjects />} />
                <Route path='/taskBoard/tasks/:id' element={<PageTasks />} />
                {/* <Route path='tasks/:id/:title' element={<EachTaskPage />} /> */}
            </Routes>
        </>
    );
};

export default App;
