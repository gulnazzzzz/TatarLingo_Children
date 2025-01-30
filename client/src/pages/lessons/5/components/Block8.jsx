import React, { useState, useEffect, useRef } from 'react';
import тавык from '../../../../assets/тавык.svg';
import one from '../../../../audios/тавык.mp3';
import audio from '../../../../assets/audio.svg';

const Block8 = ({ onNext, onBack }) => {
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
        <p className='original-text lessonText'>Тавык.
          <span className="translated-text">Курица.</span>
        </p>
      </div>
      <div className='centeredImage'>
        <img src={тавык} alt="Цифра 1"/>
      </div>
      <button onClick={onNext} className='original-text lessonBut'>Алга
        <span className="translated-text">Дальше</span>
      </button>
    </div>
  );
};

export default Block8;
