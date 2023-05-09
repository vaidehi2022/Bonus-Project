import React from "react";
import { useRecoilState } from "recoil";
import { arrState } from "../atoms/atom";

export default function QuestionsAnswers() {
  const [arr, setArr] = useRecoilState(arrState);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newArr = [...arr];
    newArr[questionIndex].selectedOption = optionIndex;
    setArr(newArr);
  };

  return (
    <div style={{ marginLeft: "5rem", fontSize: "1.5rem" }}>
      {arr.map((item, questionIndex) => (
        <div key={questionIndex}>
          <h3>Question: {item.question}</h3>
          <div>
            {item.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  style={{ marginRight: "1rem" }}
                  name={`question${questionIndex}`}
                  checked={item.selectedOption === optionIndex}
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
    </div>
  );
}

