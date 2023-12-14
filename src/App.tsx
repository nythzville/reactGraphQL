import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout';
import Login from './pages/Login';
import User from './pages/User';
import NotFound from './pages/NotFound';


function App() {

  const appName = process.env.REACT_APP_NAME;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ appName }</h1>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Login/>} />
            <Route path='users' element={<User/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
