import React, { useState, useEffect } from "react";
import "./progress.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maincontainer">
      <div className="green-progress" style={{ width: `${progress}%` }}>
        <span>{progress}%</span>
        {progress === 100 ? "Complete!!!!!!" : "Loading....."}
      </div>
    </div>
  );
};

export default ProgressBar;
