import React, { useState, useEffect, useRef } from 'react';
import песи from '../../../../assets/блок песи.svg';
import one from '../../../../audios/песи.mp3';
import audio from '../../../../assets/audio.svg';

const Block1 = ({ onNext, onBack }) => {
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
        <p className='original-text lessonText'>Песи.
          <span className="translated-text">Кошка.</span>
        </p>
      </div>
      <div className='centeredImage'>
        <img src={песи} alt="Цифра 1"/>
      </div>
      <button onClick={onNext} className='original-text lessonBut'>Алга
        <span className="translated-text">Дальше</span>
      </button>
    </div>
  );
};

export default Block1;
