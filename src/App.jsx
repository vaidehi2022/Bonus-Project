import React from "react";
import "./App.css";
import Admin from "./components/Admin";
import Student from "./components/Student";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>}/>
        <Route path="/student" element={<Student/>}/>
      </Routes>
    </BrowserRouter>
  );
}
