import { useEffect, useState } from "react";

export default function useMouse() {
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  useEffect(() => {
    function handleMouseMove(event) {
      setCursorPosition([event.clientX, event.clientY]);
    }

    document.body.addEventListener("mousemove", handleMouseMove);
    console.log("Mouse position: ", cursorPosition);
  }, [cursorPosition]);

  return cursorPosition;
}
