import { useState } from "react";
import "./styles.css";
const data = [
  {
    question: "Prime Minister of india?",
    options: ["a", "b", "c", "d"],
    correctAns: 0
  },
  {
    question: "Chief minister of bihar?",
    options: ["a", "b", "c", "d"],
    correctAns: 2
  },
  {
    question: "even number is?",
    options: ["a", "b", "c", "d"],
    correctAns: 1
  }
];

const DEAFULT_ANSWERS = new Array(data.length).fill(null);
export default function App() {
  const [selectedOptions, setSelectedOptions] = useState(DEAFULT_ANSWERS);
  const [active, setActive] = useState(false);

  const selectOption = (questionIndex, optionsIndex) => {
    const currentSelectedOptions = [...selectedOptions];
    currentSelectedOptions[questionIndex] = optionsIndex;

    setSelectedOptions(currentSelectedOptions);
    setActive(!active);
    console.log(currentSelectedOptions);
  };
  return (
    <div className="App">
      {data.map((item, questionIndex) => {
        return (
          <>
            <h1>{item.question}</h1>
            {item.options.map((item, optionsIndex) => (
              <>
                <button
                  onClick={() => selectOption(questionIndex, optionsIndex)}
                  className={
                    selectedOptions[questionIndex] === optionsIndex
                      ? "active option-btn"
                      : "option-btn"
                  }
                  key={optionsIndex}
                >
                  {item}
                </button>
              </>
            ))}
          </>
        );
      })}
    </div>
  );
}
