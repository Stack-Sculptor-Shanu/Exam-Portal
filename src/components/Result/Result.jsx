import React, { useEffect } from "react";

const Result = ({ score, rank, timeTaken, right, wrong, stopCamera }) => {
  useEffect(() => {
    // Stop the camera when the user reaches the result page
    if (stopCamera) {
      // Stop the camera here by passing the signal or any relevant logic
      console.log("Stopping the camera...");
      // If camera is controlled by parent, you'd stop the camera like:
      // setStopCamera(true);
    }
  }, [stopCamera]);

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-300 p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Exam Results</h2>
      
      {/* Result Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Score */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-inner">
          <h3 className="text-2xl font-semibold">🖋Score</h3>
          <p className="text-3xl font-bold mt-2">{score} / 15</p>
          <p className="mt-2 text-lg">Total marks earned based on correct answers.</p>
        </div>

        {/* Rank */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl">
          <h3 className="text-2xl font-semibold">🤚Rank</h3>
          <p className="text-3xl font-bold mt-2">{rank}</p>
          <p className="mt-2 text-lg">Your position among all participants.</p>
        </div>

        {/* Time Taken */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl">
          <h3 className="text-2xl font-semibold">⌚Time Taken </h3>
          <p className="text-3xl font-bold mt-2">{timeTaken} min</p>
          <p className="mt-2 text-lg">Total time you spent completing the exam.</p>
        </div>

        {/* Right Answers */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl">
          <h3 className="text-2xl font-semibold">✅Right Answers </h3>
          <p className="text-3xl font-bold mt-2">{right} / 15</p>
          <p className="mt-2 text-lg">Number of correct responses.</p>
        </div>

        {/* Wrong Answers */}
        <div className="bg-white text-black text-center p-8 rounded-xl shadow-xl h-48 w-60 flex flex-col justify-center items-center hover:shadow-2xl">
          <h3 className="text-2xl font-semibold">❌Wrong Answers</h3>
          <p className="text-3xl font-bold mt-2">{wrong} / 15</p>
          <p className="mt-2 text-lg">Number of incorrect responses.</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
