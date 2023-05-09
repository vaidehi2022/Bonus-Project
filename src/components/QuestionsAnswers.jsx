import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { arrState } from "../atoms/atom";

export default function QuestionsAnswers() {
  const [arr, setArr] = useRecoilState(arrState);
  const [totalMarks, setTotalMarks] = useState(0);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newArr = [...arr];
    newArr[questionIndex].selectedOption = optionIndex;
    setArr(newArr);
  };

  const handleSubmit = () => {
    let marks = 0;
    arr.forEach((item) => {
      const correctOptionIndex = item.correctOption;
      const selectedOptionIndex = item.selectedOption;
      if (selectedOptionIndex === correctOptionIndex) {
        marks += 1;
      }
    });
    setTotalMarks(marks);
  };

  return (
    <div style={{ marginLeft: "5rem", fontSize: "1.5rem" }}>
      {arr.map((item, questionIndex) => (
        <div key={questionIndex}>
          <h3>Question: {item.question}</h3>
          <div>
            {item.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                
              >
                <input
                  type="radio"
                  style={{ marginRight: "1rem" }}
                  name={`question${questionIndex}`}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
                {option}
                <br />
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <p>Total Attempted Questions: {totalMarks}</p>
    </div>
  );
}
