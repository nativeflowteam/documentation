// src/components/SnackPlayer.js
import React, { useEffect } from "react";

const SnackPlayer = ({
  id,
  platform = "web",
  preview = "true",
  theme = "light",
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://snack.expo.dev/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-snack-id={id}
      data-snack-platform={platform}
      data-snack-preview={preview}
      data-snack-theme={theme}
      style={{
        overflow: "hidden",
        background: "#0C0D0E",
        border: "2px solid #323234",
        borderRadius: "4px",
        height: "505px",
        width: "100%",
      }}
    ></div>
  );
};

export default SnackPlayer;
