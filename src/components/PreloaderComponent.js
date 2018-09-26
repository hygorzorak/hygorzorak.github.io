import React from "react";

export const PreloaderComponent = () => (
  <div className="preloader-outer">
    <div className="preloader">
      <div className="lines">
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
      </div>
      <div className="loading-text">
        <small>Loading...</small>
      </div>
    </div>
  </div>
);
