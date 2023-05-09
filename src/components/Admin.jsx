import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import {
  questionState,
  ans1State,
  ans2State,
  ans3State,
  ans4State,
  arrState,
} from "../atoms/atom";
import QuestionsAnswers from "./QuestionsAnswers";

export default function Admin() {
  const [question, setQuestion] = useRecoilState(questionState);

  const [firstOption, setFirstOption] = useRecoilState(ans1State);
  const [secondOption, setSecondOption] = useRecoilState(ans2State);
  const [thirdOption, setThirdOption] = useRecoilState(ans3State);
  const [fourthOption, setFourthOption] = useRecoilState(ans4State);

  const [arr, setArr] = useRecoilState(arrState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (!question ||
        !firstOption ||
        !secondOption ||
        !thirdOption ||
        !fourthOption) == ""
    ) {
      // Create a new question object
      const newQuestion = {
        question: question,
        options: [firstOption, secondOption, thirdOption, fourthOption],
      };

      // Add the new question object to the arr array
      setArr([...arr, newQuestion]);
    } else {
      alert("please fill each input box");
    }
    // Reset the form values
    setQuestion("");
    setFirstOption("");
    setSecondOption("");
    setThirdOption("");
    setFourthOption("");
  };

  return (
    <>
      <div style={{textAlign:'center', fontSize:'2rem'}}>
        <Link to="/" className="admin_Link" style={{color:'yellow'}}>
          Admin Portal
        </Link>{" "}
        
        <Link to="/student" style={{color:'yellow'}}>Student Portal</Link>
      </div>
      <div className="second-div">
        <section className="left-section">
          <h2>Set Questions</h2>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="add new questions"
            className="input-que"
          />
          <h2>Add answers</h2>
          <div>
            <input
              type="text"
              placeholder="add first options"
              className="input-ans"
              value={firstOption}
              onChange={(e) => setFirstOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="add second options"
              className="input-ans"
              value={secondOption}
              onChange={(e) => setSecondOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="add third options"
              className="input-ans"
              value={thirdOption}
              onChange={(e) => setThirdOption(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="add fourth options"
              className="input-ans"
              value={fourthOption}
              onChange={(e) => setFourthOption(e.target.value)}
            />
          </div>
          <br />

          <button className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </section>

        <section className="right-section">
          <h2 className="hTwo-data">Quiz Data</h2>
          <QuestionsAnswers />
        </section>
      </div>
    </>
  );
}
