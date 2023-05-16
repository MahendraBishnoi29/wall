import { useEffect, useState } from "react";

export const useDebounce = (inputValue = "", debounceDelay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, debounceDelay);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue, debounceDelay]);

  return debouncedValue;
};
