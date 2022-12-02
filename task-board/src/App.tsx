import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Tasks } from './pages/Tasks';
import { Projects } from './pages/Projects';

const App = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<Projects />} />
              <Route path='tasks/:id' element={<Tasks />} />
          </Routes>
      </>
  );
}

export default App;
