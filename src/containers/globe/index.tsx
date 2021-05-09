import React from "react";
import ReactGlobe from "react-globe";

export const Globe = () => {
  return (
    <ReactGlobe
      height="100vh"
      width="100%"
      globeTexture="https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg"
      globeBackgroundTexture=""
    />
  );
};
