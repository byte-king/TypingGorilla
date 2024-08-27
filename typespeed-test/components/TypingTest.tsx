"use client";
import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import Timer from "./TimerClass/timer";
import { useRecoilValue } from "recoil";
import { timerStartState } from "@/atoms/atom";
import VirtualKeyboard from "./VirtualKeyboard";
const TypingTest = () => {
  const [inputValue, setInputValue] = useState("");
  const correctText =
    "The sun dipped below the horizon, casting a warm, golden glow over the tranquil lake. Birds chirped melodiously, their songs echoing through the crisp evening air. A gentle breeze rustled the leaves of the ancient oak trees, creating a soothing symphony of nature. As the stars began to twinkle in the darkening sky, the world seemed to pause, basking in the serene beauty of the moment. It was a perfect reminder of the simple joys that life has to offer."; // Replace with your test text
  const [correctWordsCount, setCorrectWordsCount] = useState(0);
  const [totalWordsTyped, setTotalWordsTyped] = useState(0);
  const timerStart = useRecoilValue(timerStartState);

  // Calculate accuracy and WPM
  const accuracy = (correctWordsCount / totalWordsTyped) * 100;
  const wpm = correctWordsCount;

  useEffect(() => {
    // Example effect to simulate word comparison and update correctWordsCount
    // This is a placeholder. You'll need to replace it with your actual logic.
    const words = inputValue.split(/\s+/);
    const correctWords = words.filter(
      (word, index) => word === correctText.split(" ")[index]
    );
    setCorrectWordsCount(correctWords.length);
    setTotalWordsTyped(words.length);
  }, [inputValue, correctText]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}>
      <Timer />
      {!timerStart && (
        <Card>
          <CardBody>
            <Input
              isReadOnly
              value={`accuracy : ${accuracy}%`}
            />
            <Input
              isReadOnly
              value={`wpm : ${wpm} `}
            />
          </CardBody>
        </Card>
      )}
      <Card>
        <CardBody>
          <p>{correctText}</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Input
            isReadOnly={!timerStart}
            onChange={handleInputChange}
          />
        </CardBody>
      </Card>
      <VirtualKeyboard />
    </div>
  );
};

export default TypingTest;
