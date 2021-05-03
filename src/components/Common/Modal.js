import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import posed from "react-pose";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener, { passive: true });
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}

const modalBackgroundPoses = {
  open: {
    background: "rgba(0, 0, 0, 0.8)",
    applyAtStart: {
      display: "block",
      overflow: "hidden",
    },
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    applyAtEnd: {
      display: "none",
    },
  },
};

const ModalBackground = styled(posed.div(modalBackgroundPoses))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: "hidden";
`;

const modalPoses = {
  open: {
    opacity: 1,
    transition: {
      opacity: {
        type: "tween",
        duration: 800,
      },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        type: "tween",
        duration: 800,
      },
    },
  },
};

const Window = styled(posed.div(modalPoses))`
  position: fixed;
  background: transparent;
  width: 720px;
  height: auto;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);

  @media screen and (max-width: 720px) {
    width: 90vw;
  }

  @media screen and (max-width: 425px) {
    width: 356px;
  }

  @media screen and (max-width: 356px) {
    width: 100vw;
  }
`;

const Modal = ({ isOpen, toggle, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  return (
    <ModalBackground initialPose="closed" pose={isOpen ? "open" : "closed"}>
      <Window ref={ref}>{children}</Window>
    </ModalBackground>
  );
};

export default React.memo(Modal);
