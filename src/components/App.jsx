import React from 'react';

import "./App.css"

import NavBar from './navbar/navBar.jsx'; 
// import MainPage from './MainPage';
import EditPage from "./EditPage";


function App() {
    return (<React.Fragment>
        <NavBar />
        {/* <MainPage /> */}
        <EditPage />
    </React.Fragment>);
}

export default App;