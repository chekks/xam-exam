import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/" Component={LoginForm} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
