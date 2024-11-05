import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mantine/core";

interface AspectRatioProps {
  children: React.ReactNode;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        const { offsetWidth, offsetHeight } = contentRef.current.parentElement!;
        const newScale = Math.min(
          offsetWidth / (offsetWidth * scale),
          offsetHeight / (offsetHeight * scale)
        );
        setScale(newScale);
      }
    });

    if (contentRef.current && contentRef.current.parentElement) {
      resizeObserver.observe(contentRef.current.parentElement);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: `${100 / 16 / 9}%`,
        overflow: "hidden",
      }}
    >
      <Box
        ref={contentRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
