import React from 'react';

import "./App.css"

import NavBar from './navbar/navBar.jsx'; 
import MainPage from './MainPage';
import EditPage from "./EditPage";
import { Route, Routes } from 'react-router-dom';


function App() {
    return (<div className='w-full h-full flex flex-d-col overflow-y-auto gap-8 bg-light-gray'>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/edit" element={<EditPage />} />
        </Routes>
    </div>);
}

export default App;