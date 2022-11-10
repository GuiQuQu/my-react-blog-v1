import React from 'react';

import "./App.css"

import NavBar from './navbar/navBar.jsx'; 
import MainPage from './MainPage';
import EditPage from "./EditPage";
import { Route, Routes } from 'react-router-dom';


function App() {
    return (<React.Fragment>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/edit" element={<EditPage />} />
        </Routes>
    </React.Fragment>);
}

export default App;