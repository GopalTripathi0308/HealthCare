"use client";

import { useState, useEffect } from "react";

interface UseTypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  loop = true,
}: UseTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isWaiting) {
          setIsWaiting(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setCurrentText(currentWord.substring(0, currentText.length - 1));
          }
        } else {
          if (currentText === currentWord) {
            if (loop || currentWordIndex < words.length - 1) {
              setIsWaiting(true);
            }
          } else {
            setCurrentText(currentWord.substring(0, currentText.length + 1));
          }
        }
      },
      isWaiting ? delaySpeed : isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isWaiting,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
  ]);

  return {
    text: currentText,
    isTyping:
      !isDeleting && !isWaiting && currentText !== words[currentWordIndex],
    isDeleting,
    isWaiting,
  };
}
