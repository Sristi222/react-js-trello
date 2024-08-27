import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import './App.css';

function App() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Sidebar />
            <div className="main-content">
                <Board />
            </div>
        </>
    );
}

export default App;
