import React from "react";
import { useNavigate } from "react-router-dom";

const Exams = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col my-5 mx-5 shadow-md rounded-lg p-6 w-96 text-center">
      <h2 className="text-xl font-bold text-gray-800">Aptitude Exam</h2>
      <p className="text-gray-600 mt-2">15 questions</p>
      <p className="text-gray-600 mt-2">⏳ Duration: 10 minutes</p>
      <button
        onClick={() => navigate("/instructions")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Start Exam
      </button>
    </div>
  );
};

export default Exams;

