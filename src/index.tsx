import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Course from './pages/Course/Course';
import Navbar from './components/Navbar/Navbar';
import Provider from './Provider';
import { inject } from '@vercel/analytics';
import Courses from './pages/Course/Courses';

inject();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/handbook" element={<Course />} /> {/* For backwards compatibility with old course url */}
          <Route path="course/:id" element={<Course />} />
          <Route path="course/:id/:cohort" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="introprogram" element={<Navigate to="/course/ea-intro" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
