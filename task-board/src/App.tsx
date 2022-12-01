import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Tasks } from './pages/Tasks';
import { Projects } from './pages/Projects';

const App = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<Projects />} />
              <Route path='/tasks' element={<Tasks />} />
          </Routes>
      </>
  );
}

export default App;
