// Import necessary hooks and utilities
import React, { useState, useEffect } from "react";
import { LuAlarmClock } from "react-icons/lu";
import { Input } from "@nextui-org/react";
import { timerStartState } from "@/atoms/atom";
import { useRecoilState } from "recoil";

const Timer: React.FC = () => {
  const [timerValue, setTimerValue] = useState(60); // Initialize timer at 60 seconds
  const [, setTimerStart] = useRecoilState(timerStartState);

  useEffect(() => {
    if (!timerValue) return;

    const intervalId = setInterval(() => {
      setTimerValue((prevTimerValue) => prevTimerValue - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [timerValue]);

  useEffect(() => {
    if (timerValue === 0) {
      setTimerStart(false);
    }
  }, [timerValue, setTimerStart]);

  return (
    <div className="xs">
      <Input
        isReadOnly
        label="Time Remaining"
        value={timerValue.toString()}
        startContent={
          <LuAlarmClock className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
};

export default Timer;
