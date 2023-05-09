import React from "react";
import "./Student.css";
import { Link } from "react-router-dom";
import QuestionsAnswers from "./QuestionsAnswers";

export default function Student() {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "2rem" }}>
        <Link to="/" className="admin_Link" style={{ color: "yellow" }}>
          Admin Portal
        </Link>{" "}
        <Link to="/student" style={{ color: "yellow" }}>
          Student Portal
        </Link>
      </div>
      <section className="student-right-section">
        <h2 className="student-hTwo-data">Quiz Data</h2>
        <QuestionsAnswers />
      </section>
    </>
  );
}
