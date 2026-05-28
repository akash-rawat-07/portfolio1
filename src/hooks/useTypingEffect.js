import { useState, useEffect } from "react";

export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = currentWord.slice(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayText;
}
