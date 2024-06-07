import React, { useState, useEffect, useRef } from 'react';
import n1 from '../../../../assets/1.svg';
import one from '../../../../audios/бер.mp3';
import audio from '../../../../assets/audio.svg';

const FirstBlock = ({ onNext, onBack }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAudioClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className='lessonBlock'>
      <div className='audio-text'>
        <audio ref={audioRef} src={one} />
        <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
        <p className='lessonText'>Бер.</p>
      </div>
      <div className='centeredImage'>
        <img src={n1} alt="Число 1"/>
      </div>
      <button onClick={onNext} className='lessonBut'>Дальше</button>
    </div>
  );
};

export default FirstBlock;
