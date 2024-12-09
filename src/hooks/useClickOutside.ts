import { useEffect, useRef } from "react";

export default function useClickOutside(handleClose: Function, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e: Event) {
        if (ref.current && !(e.target instanceof ref.current)) {
          handleClose();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handleClose]
  );

  return { ref };
}
