import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Instructions = () => {
    const navigate = useNavigate();

    const handleStartExam = () => {

          // Hide navbar before going full screen
          const navbar = document.getElementById("navigationbar");
          if (navbar) navbar.style.display = "none";


        // Request fullscreen mode
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Edge
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }

        // Navigate to exam page
        navigate("/liveexams");
    };

    return (
        <div className="p-6 max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Exam Instructions</h1>
            <ul className="text-left mb-4">
                <li>1. The exam will be conducted in full-screen mode.</li>
                <li>2. Switching tabs or minimizing the window will auto-submit your exam.</li>
                <li>3. Answer all questions within the given time.</li>
                <li>4. Ensure a stable internet connection.</li>
            </ul>
            <button
                onClick={handleStartExam}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Start Exam
            </button>
        </div>
    );
};

export default Instructions;