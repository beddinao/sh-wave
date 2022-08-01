import React, { useEffect, useState } from 'react';
import './Welcom.css';
import { Link } from 'react-router-dom';
import { isElementInViewport } from '../../home';
import $ from 'jquery';


function Home_welcome() {
  
  const isVisible = (el) => {
    if (isElementInViewport(el)) {
      
      console.log('in view');
    } else {
      
      console.log('not in view');
    }
  };

  window.addEventListener('scroll', function () {
    document.querySelectorAll('.ssh').forEach((sh) => {
      isVisible(sh);
    });
  });
  
  return (
    <div>
        <div to={sLink} style={{ display : offs.disp }} >
          {' '}
          <a></a>
        </div>
    </div>
  );
}
