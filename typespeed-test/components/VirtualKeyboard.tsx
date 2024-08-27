"use client";
import React, { useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./keyboardThemes.css";

const VirtualKeyboard: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [shiftPressed, setShiftPressed] = useState<boolean>(false);
  const [capsLockActive, setCapsLockActive] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleChange = (input: string) => {
    setInput(input);
  };

  const handleKeyPress = (button: string) => {
    setActiveButton(button);
    console.log("Active button", activeButton);
    setTimeout(() => setActiveButton(null), 200); // Remove active state after 200ms

    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{capslock}") handleCapsLock();
  };

  const handleShift = () => {
    setShiftPressed(!shiftPressed);
  };

  const handleCapsLock = () => {
    setCapsLockActive(!capsLockActive);
  };
  const getLayoutName = () => {
    if (shiftPressed && capsLockActive) {
      return "default";
    } else if (shiftPressed || capsLockActive) {
      return "shift";
    } else {
      return "default";
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let updatedInput = input;
      if (event.key === "Shift") {
        setShiftPressed(true);
      } else if (event.key === "CapsLock") {
        setCapsLockActive((prevState) => !prevState);
      } else if (event.key === "Backspace") {
        updatedInput = updatedInput.slice(0, -1);
      } else if (event.key === "Enter") {
        updatedInput += "\n";
      } else {
        updatedInput += event.key;
      }
      setInput(updatedInput);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setShiftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [input]);

  return (
    <div className="light-theme">
      <Keyboard
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        buttonTheme={[
          {
            class: "hg-active",
            buttons: activeButton || "",
          },
        ]}
        layoutName={getLayoutName()}
        layout={{
          default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
            "{tab} q w e r t y u i o p [ ] \\",
            "{capslock} a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{ctrl} {alt} {space} {alt} {ctrl}",
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
            "{tab} Q W E R T Y U I O P { } |",
            '{capslock} A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            "{ctrl} {alt} {space} {alt} {ctrl}",
          ],
        }}
        display={{
          "{backspace}": "Backspace",
          "{enter}": "Enter",
          "{shift}": "Shift",
          "{tab}": "Tab",
          "{capslock}": "Caps Lock",
          "{ctrl}": "Ctrl",
          "{alt}": "Alt",
          "{space}": "Space",
        }}
      />
      <div>
        <p>Shift Pressed: {shiftPressed ? "Yes" : "No"}</p>
        <p>Caps Lock Active: {capsLockActive ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
