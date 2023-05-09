import React, { useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import QuestionsAnswers from "./QuestionsAnswers";

import { useRecoilState } from "recoil";
import {
  questionState,
  ans1State,
  ans2State,
  ans3State,
  ans4State,
  arrState,
} from "../atoms/atom";

export default function Admin() {
  const [question, setQuestion] = useRecoilState(questionState);
  const [firstOption, setFirstOption] = useRecoilState(ans1State);
  const [secondOption, setSecondOption] = useRecoilState(ans2State);
  const [thirdOption, setThirdOption] = useRecoilState(ans3State);
  const [fourthOption, setFourthOption] = useRecoilState(ans4State);
  const [arr, setArr] = useRecoilState(arrState);

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question || !firstOption || !secondOption || !thirdOption || !fourthOption) {
      alert("Please fill in all input boxes.");
      return;
    }

    const newQuestion = {
      question: question,
      options: [firstOption, secondOption, thirdOption, fourthOption],
      // correctanswer : 
    };

    if (editMode) {
      // Update existing question
      const updatedArr = [...arr];
      updatedArr[editIndex] = newQuestion;
      setArr(updatedArr);
      setEditMode(false);
      setEditIndex(null);
    } else {
      // Add new question
      setArr([...arr, newQuestion]);
    }

    // Reset form values
    setQuestion("");
    setFirstOption("");
    setSecondOption("");
    setThirdOption("");
    setFourthOption("");
  };

  const handleEditClick = (index) => {
    setEditMode(true);
    setEditIndex(index);

    const { question, options } = arr[index];
    setQuestion(question);
    setFirstOption(options[0]);
    setSecondOption(options[1]);
    setThirdOption(options[2]);
    setFourthOption(options[3]);
  };

  const handleDeleteClick = (index) => {
    const updatedArr = [...arr];
    updatedArr.splice(index, 1);
    setArr(updatedArr);
  };

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
      <div className="second-div">
        <section className="left-section">
          <h2>Set Questions</h2>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Add new question"
            className="input-que"
          />
          <h2>Add Options</h2>
          <div>
            <input
              type="text"
              placeholder="Add first option"
              className="input-ans"
              value={firstOption}
              onChange={(e) => setFirstOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Add second option"
             
              className="input-ans"
              value={secondOption}
              onChange={(e) => setSecondOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Add third option"
              className="input-ans"
              value={thirdOption}
              onChange={(e) => setThirdOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Add fourth option"
              className="input-ans"
              value={fourthOption}
              onChange={(e) => setFourthOption(e.target.value)}
            />
          </div>
          <br />

          <button className="btn" onClick={handleSubmit}>
            {editMode ? "Update" : "Submit"}
          </button>
        </section>

        <section className="right-section">
          <h2 className="hTwo-data">Quiz Data</h2>
          {arr.map((item, index) => (
            <div key={index} className="question-item">
              <p>Question: {item.question}</p>
              <ul>
                {item.options.map((option, i) => (
                  <li 
                  key={i}>Option {i + 1}: {option}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
