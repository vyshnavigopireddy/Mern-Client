import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Feedback from './component/Feedback';
import Display from './component/Display';
import TodoList from './component/TodoList';
import Feed from './component/Feed';
import { MyProvider } from './Mycontext'; // Ensure the correct path

const root = document.getElementById('root');
const VirtualRoot = ReactDOM.createRoot(root);

VirtualRoot.render(
  <MyProvider>
    <Router>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/display" element={<Display />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  </MyProvider>
);
