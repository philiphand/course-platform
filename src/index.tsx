import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Course from './pages/Course/Course';
import Navbar from './components/Navbar/Navbar';
import Provider from './Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/handbook" element={<Course />} /> {/* For backwards compatibility with old course url */}
          <Route path="course/:id" element={<Course />} />
          <Route path="course/:id/:cohort" element={<Course />} />
          <Route path="introprogram" element={<Navigate to="/course/handbook" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
