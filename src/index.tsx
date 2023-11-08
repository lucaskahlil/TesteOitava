import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditTask from './pages/EditTask/editTask';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/edit/' element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
