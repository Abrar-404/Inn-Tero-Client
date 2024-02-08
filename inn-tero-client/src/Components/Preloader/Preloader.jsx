import React, { useEffect } from 'react';
import { preLoaderAnim } from './animations';
import '../Styles/preloader.css';
import anim from '../../assets/anim.gif';
import anim2 from '../../assets/anim2.gif';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="font-script flex">
          <img className="h-[60px] w-[10px] pr-1 mr-1" src={anim2}></img>nn-
        </span>
        <span className="font-script"> Tero</span>
        <span>
          <img src={anim}></img>
        </span>
      </div>
    </div>
  );
};

export default PreLoader;
