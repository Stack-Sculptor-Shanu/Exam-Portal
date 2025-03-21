import React, { useEffect, useRef, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import '@tensorflow/tfjs';

const LiveFaceDetection = ({ stopCamera }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [warning, setWarning] = useState('');
  const modelRef = useRef(null);  // To store the model
  const intervalRef = useRef(null);  // To store the interval

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        modelRef.current = await blazeface.load();  // Load model
        intervalRef.current = setInterval(() => detectFaces(), 100);  // Start detecting faces
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    const detectFaces = async () => {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const predictions = await modelRef.current.estimateFaces(video, false);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;

        predictions.forEach((prediction) => {
          const start = prediction.topLeft;
          const end = prediction.bottomRight;
          const size = [end[0] - start[0], end[1] - start[1]];
          ctx.strokeRect(start[0], start[1], size[0], size[1]);
        });

        // If more than one person is detected, show a warning
        if (predictions.length > 1) {
          setWarning('Warning: More than one person detected!');
          setTimeout(() => {
            setWarning('');
          }, 4000);
        } else {
          setWarning('');
        }
      }
    };

    if (!stopCamera) {
      startVideo();
    } else {
      // Cleanup and stop camera if stopCamera is true
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Stop face detection interval
      }
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());  // Stop camera stream
      }
    }

    // Cleanup on component unmount or stopCamera change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);  // Stop face detection interval on cleanup
      }
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());  // Stop camera stream on cleanup
      }
    };
  }, [stopCamera]);  // Re-run effect when stopCamera changes

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4 text-center">Live Face Detection</h1>
      
      {/* Video Section */}
      <div className="relative w-full max-w-2xl mb-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-lg shadow-lg border border-gray-300"
        />
        {/* Canvas Overlay for Face Detection */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ display: "none" }} // Hide canvas, used only for drawing face boxes
        />
      </div>

      {/* Warning Message */}
      {warning && (
        <p className="text-red-500 font-medium text-lg">{warning}</p>
      )}
    </div>
  );
};

export default LiveFaceDetection;
