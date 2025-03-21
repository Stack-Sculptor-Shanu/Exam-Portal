import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const LiveRecord = ({ onViolation }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [warnings, setWarnings] = useState(0);

  useEffect(() => {
    startCamera();
    loadModels();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const loadModels = async () => {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    const objectModel = await cocoSsd.load();
    detectFacesAndObjects(objectModel);
  };

  const detectFacesAndObjects = async (objectModel) => {
    setInterval(async () => {
      const video = videoRef.current;
      if (!video) return;

      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
      console.log(detections)
      const objects = await objectModel.detect(video);

      drawCanvas(detections, objects);

      const faceCount = detections.length;
      const hasMobile = objects.some((obj) => obj.class === "cell phone");

      // If more than one person is detected, show a toast message
      if (faceCount > 1) {
        showToastMessage();
      }

      if (faceCount > 1 || hasMobile) {
        handleWarning();
      }
    }, 2000);
  };

  const drawCanvas = (detections, objects) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    detections.forEach((detection) => {
      const { x, y, width, height } = detection.box;
      context.strokeStyle = "red";
      context.lineWidth = 2;
      context.strokeRect(x, y, width, height);
    });
    
    objects.forEach((object) => {
      if (object.class === "cell phone") {
        const [x, y, width, height] = object.bbox;
        context.strokeStyle = "blue";
        context.lineWidth = 2;
        context.strokeRect(x, y, width, height);
      }
    });
  };

  const handleWarning = () => {
    setWarnings((prev) => {
      const newCount = prev + 1;
      alert(`Warning ${newCount}: Unauthorized object detected!`);
      if (newCount >= 3) {
        onViolation();
      }
      return newCount;
    });
  };

  const showToastMessage = () => {
    toast.info("More than one person detected!", { autoClose: 3000 });
  };

  return (
    <div className="relative">
      <video ref={videoRef} autoPlay playsInline className="w-full h-full" />
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
      <ToastContainer /> {/* Toast container to display toasts */}
    </div>
  );
};

export default LiveRecord;
