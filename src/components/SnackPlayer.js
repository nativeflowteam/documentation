// src/components/SnackPlayer.js
import React, { useEffect } from "react";

const SnackPlayer = ({
  id,
  platform = "web",
  preview = "true",
  theme = "dark",
}) => {
  useEffect(() => {
    const scriptId = "snack-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://snack.expo.dev/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.ExpoSnack) {
        window.ExpoSnack.initialize();
      }
    }
  }, []);

  return (
    <div
      data-snack-id={id}
      data-snack-platform={platform}
      data-snack-preview={preview}
      data-snack-theme={theme}
      data-snack-loading="lazy"
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
