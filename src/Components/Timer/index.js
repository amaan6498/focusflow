import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Timer = () => {
  const [inVisible, setCustumize] = useState(false);
  const [time, setTime] = useState(25 * 60); // Set initial time to 25 minutes (in seconds)
  const [inputTime, setInputTime] = useState(""); // For user input
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null); // Ref to store the timer ID

  // Create a new Audio object for the sound
  const sound = new Audio("/clock.mp3"); // Make sure to replace this path with your actual sound file path

  const showCustumizeInput = () => {
    setCustumize((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    setInputTime(event.target.value);
  };

  const updateTime = () => {
    const minutes = parseInt(inputTime, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setTime(minutes * 60); // Convert to seconds
      setCustumize(false);
    }
  };

  const startTimer = () => {
    if (time > 0 && !isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            sound.play(); // Play sound when timer reaches zero

            // Stop sound after 8 seconds
            setTimeout(() => {
              sound.pause(); // Pause the sound
              sound.currentTime = 0; // Reset sound to start
            }, 8000); // 8000 milliseconds (8 seconds)
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(25 * 60); // Reset time to initial 25 minutes (1500 seconds)
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Cleanup the timer when the component unmounts
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="main-timer-container">
      <Link to="/about">
        <button type="button" className="about-button">
          About
        </button>
      </Link>
      <div className="timer-container">
        <h3 className="title-header">Focus Flow</h3>
        <h1 className="timer-counter">{formatTime()}</h1>
        {isRunning ? (
          <button type="button" className="button-form" onClick={stopTimer}>
            Stop
          </button>
        ) : (
          <button type="button" className="button-form" onClick={startTimer}>
            Start
          </button>
        )}
        <button
          type="button"
          className="button-form"
          onClick={showCustumizeInput}
        >
          Customize
        </button>
        {inVisible && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateTime();
            }}
            className="customize-form"
          >
            <div className="form-custom">
              <input
                type="number"
                placeholder="Enter time in minutes"
                className="input-form"
                value={inputTime}
                onChange={handleInputChange}
              />
              <button type="submit" className="button-form">
                Set
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Timer;
