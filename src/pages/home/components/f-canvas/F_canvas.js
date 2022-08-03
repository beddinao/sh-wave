import React, { useEffect, useState, memo } from 'react';

function Home_canvas() {
  return (
    <div id="center-S">
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,100 50,25 50,75 100,0" fill="white" />
      </svg>
    </div>
  );
}

export default memo(Home_canvas);
