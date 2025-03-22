import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"], answer: "JavaScript XML" },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"], answer: "useState" },
  { id: 4, question: "Which method is used to update state in class components?", options: ["setState", "updateState", "changeState", "modifyState"], answer: "setState" },
  { id: 5, question: "Which hook is used to handle side effects?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useEffect" },
  { id: 6, question: "Which of these is NOT a React hook?", options: ["useState", "useEffect", "useFetch", "useReducer"], answer: "useFetch" },
  { id: 7, question: "What does React use to update the UI efficiently?", options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Manual DOM"], answer: "Virtual DOM" },
  { id: 8, question: "How do you pass data from parent to child in React?", options: ["Props", "State", "Context", "Hooks"], answer: "Props" },
  { id: 9, question: "What is the default behavior of React events?", options: ["Synchronous", "Asynchronous", "Prevent Default", "Bubbling"], answer: "Asynchronous" },
  { id: 10, question: "Which command creates a new React app?", options: ["npx create-react-app myApp", "npm install react", "react init", "npm start"], answer: "npx create-react-app myApp" },
  { id: 11, question: "What is the purpose of React Router?", options: ["To manage global state", "To handle API requests", "To navigate between pages", "To style components"], answer: "To navigate between pages" },
  { id: 12, question: "Which hook is used to store a value that doesn’t trigger re-render?", options: ["useState", "useMemo", "useCallback", "useRef"], answer: "useRef" },
  { id: 13, question: "What is the use of useMemo hook?", options: ["Memoization", "State Management", "Side Effects", "Event Handling"], answer: "Memoization" },
  { id: 14, question: "Which of the following is a valid way to conditionally render JSX?", options: ["if-else", "Ternary Operator", "Logical AND (&&)", "All of the above"], answer: "All of the above" },
  { id: 15, question: "Which lifecycle method runs after the component mounts?", options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "constructor"], answer: "componentDidMount" }
];

// export default questions;

const MockTest = () => {
     const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedAnswers, setSelectedAnswers] = useState({});
      
    // currentQuestion state to move to the next question.prev+1 icreses question index.thats all
      const handleNext = () => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    
    //uesd to select answer for current qs
      const handleradioButtonChange = (option) => {
        setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
      };
    
      //submit answer
      const handleSubmit = () => {
        console.log("Submitted Answers:", selectedAnswers);
        alert("Exam Submitted Successfully!");
      };
  return (
    // left side    

    <div className='flex min-h-screen'>
       
       <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      {/* <h2 className="text-2xl font-bold text-center mb-4">Coding Mcqs</h2> */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{questions[currentQuestion].question}</h3>
        <div className="mt-2 space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleradioButtonChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleNext}
          disabled={currentQuestion >= questions.length - 1}
        >
          Next
        </button>
        {currentQuestion === questions.length - 1 && (
          <Link to="/MockResult">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handleSubmit}
            >
            Submit
          </button>
            </Link>
        )}
      </div>
    </div>


        




                {/* right side */}
        <div className='w-1/5 p-6 bg-green-100 shadow-md flex flex-col  items-center '>
       


        <div className='text-cener'>

       <div
      className="h-[200px] w-[200px] rounded-full border-2 border-black bg-cover bg-center  "
      style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5603AQEzIVpnvglnaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723961314666?e=1747872000&v=beta&t=p74YNSKXMlDfFEN_kGKw7CmfrvhfgNQ91ydsmy_FLyA')" }}>



    </div>
        </div>
       <h1>biswajit sahu</h1>
       

        <div >
            time

        </div>
        {/* <div  className='h-[200px] w-[200px] bg-black text-white rounded-[10px]'>
            video
        </div> */}

        </div>
      
    </div>
  )
}

export default MockTest
