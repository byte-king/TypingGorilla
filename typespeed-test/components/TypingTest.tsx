import React, { useRef, useState, ChangeEvent } from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import Timer from "./TimerClass/timer";
import { useRecoilState } from "recoil";
import { timerStartState } from "@/atoms/atom";
const TypingTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [correctText, setCorrectText] = useState(
    "The sun dipped below the horizon, casting a warm, golden glow over the tranquil lake. Birds chirped melodiously, their songs echoing through the crisp evening air. A gentle breeze rustled the leaves of the ancient oak trees, creating a soothing symphony of nature. As the stars began to twinkle in the darkening sky, the world seemed to pause, basking in the serene beauty of the moment. It was a perfect reminder of the simple joys that life has to offer."
  ); // Replace with your test text

  const [correctWordsCount, setCorrectWordsCount] = useState(0);

  // When user clicks the start test, start a timer of 60s .
  // This should be displayed to the user
  // For now, auto submit when the timer reaches 0.
  // and then show the user the results
  //

  const [timerStart, setTimerStart] = useRecoilState(timerStartState);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}>
      <Timer timerStart={true} />
      <Card>
        <CardBody>
          <p>{correctText}</p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Input isReadOnly={!timerStart} />
        </CardBody>
      </Card>
    </div>
  );
};

export default TypingTest;
