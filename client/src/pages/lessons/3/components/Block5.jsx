import React, { useState, useEffect, useRef } from 'react';
import n2 from '../../../../assets/2саны.svg';
import one from '../../../../audios/ике.mp3';
import audio from '../../../../assets/audio.svg';

const Block5 = ({ onNext, onBack }) => {
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
        <p className='original-text lessonText'>Ике.
          <span className="translated-text">Два.</span>
        </p>
      </div>
      <div className='centeredImage'>
        <img src={n2} alt="Цифра 2"/>
      </div>
      <button onClick={onNext} className='original-text lessonBut'>Алга
        <span className="translated-text">Дальше</span>
      </button>
    </div>
  );
};

export default Block5;
