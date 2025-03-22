import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LiveFaceDetection from "./LiveFaceDetection";
// import ConfirmationModal from "./ConfirmationModal";  // Import the modal component
import Confirmation from "./Confirmation";

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language", "Database"] },
  { id: 2, question: "What is JSX?", options: ["JavaScript XML", "JSON", "Template Engine", "None"] },
  { id: 3, question: "Which hook is used for state?", options: ["useEffect", "useState", "useReducer", "useRef"] },
];

const LiveExams = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes timer
  const [stopCamera, setStopCamera] = useState(false); // New state to control camera stopping
  const [confirm, setConfirm] = useState(false); // New state to control modal visibility
  const [examSubmitted, setExamSubmitted] = useState(false);

  // Prevent navigation away from the exam
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave? Your progress will be lost.";
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSubmit();
      }
    };

    const disableBackNavigation = () => {
      window.history.pushState(null, "", window.location.href);
    };

    const preventKeyNavigation = (event) => {
      if (event.key === "Escape" || (event.altKey && event.key === "Tab")) {
        event.preventDefault();
        handleSubmit();
      }
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", disableBackNavigation);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", preventKeyNavigation);

    return () => {
      window.removeEventListener("popstate", disableBackNavigation);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", preventKeyNavigation);
    };
  }, []);

  // Timer Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (selectedAnswers[currentQuestion]) {
      setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
    }
  };

  const handleRadioButtonChange = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleSubmit = () => {
    const results = questions.map((q, index) => ({
      question: q.question,
      selectedAnswer: selectedAnswers[index] || "No answer selected",
    }));
    console.log("Submitted Answers:", results);
    setExamSubmitted(true);
    // Navigate to the result page
    navigate("/result",{replace:true});
    setStopCamera(true);
    window.history.pushState(null, "", window.location.href);

  // Listen to the back button event and prevent going back
  window.addEventListener("popstate", () => {
    window.history.pushState(null, "", window.location.href);
  });
  };

  const handleReset = () => {
    // Reset only the current question's selected answer
    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[currentQuestion];  // Remove the answer for the current question
      return newAnswers;
    });
  };

  const handleEndTest = () => {
    setConfirm(true); // Show the confirmation modal
  };

  const handleConfirmEndTest = () => {
    setStopCamera(true); // Stop the camera when the test ends
    handleSubmit(); // Submit the exam
    setConfirm(false); // Close the modal
    const navbar = document.getElementById("navigationbar");
    if (navbar) navbar.style.display = "";
  };

  const handleCancelEndTest = () => {
    setConfirm(false); // Close the modal if canceled
  };

  const isNextDisabled = !selectedAnswers[currentQuestion];

  // Format Time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full h-screen flex bg-gray-100 p-5">
      {/* Question Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4">Coding MCQs</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{questions[currentQuestion].question}</h3>
          <div className="mt-2 space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="block bg-gray-100 p-2 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  className="mr-2"
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={() => handleRadioButtonChange(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Button Container (placed at the bottom of the question container) */}
        <div className="mt-auto flex justify-between space-x-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={handleReset} // Call handleReset on Reset button click
          >
            Reset
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              className={`px-4 py-2 rounded-lg ${isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
              disabled={isNextDisabled}
              onClick={handleNext}
            >
              Save & Next
            </button>
          ) : (
            <button
              className={`px-4 py-2 rounded-lg ${isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
              disabled={isNextDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Right Section - User Details & Live Camera */}
      <div className="w-[300px] bg-white p-6 ml-5 rounded-lg shadow-lg flex flex-col items-center">
        {/* User Image */}
        <img
          src="https://imgs.search.brave.com/HZof5NcwDG0Te0CjHfnKxZSa10arSf39HE74desIo6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbG9nby1kc2E0/aXB6MG8yMmh1cTFi/LmpwZw"
          alt="User"
          className="w-50 h-60 rounded-full border-2 border-gray-300 mb-3"
        />
        <h3 className="text-lg font-semibold mb-2">John Doe</h3>
        <div className="h-text-lg font-bold bg-gray-200 px-4 py-2 rounded-md mb-3">
          ⏳ {formatTime(timeLeft)}
        </div>
        {/* Live Camera Recording */}
        <LiveFaceDetection stopCamera={stopCamera} />
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg" onClick={handleEndTest}>
          End Test
        </button>
      </div>

      {/* Confirmation Modal */}
      {confirm && (
        <Confirmation
          message="Are you sure you want to end the test?"
          onConfirm={handleConfirmEndTest}
          onCancel={handleCancelEndTest}
        />
      )}
    </div>
  );
};

export default LiveExams;
