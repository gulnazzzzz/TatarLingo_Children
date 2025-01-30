import React, { useState, useEffect, useRef } from 'react';
import туплар from '../../../../assets/теория2туп.svg';
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
        <p className='original-text lessonText'>Ике туп.
          <span className="translated-text">Два мяча.</span>
        </p>
      </div>
      <div className='centeredImage'>
        <img src={туплар} alt="Два мяча"/>
      </div>
      <button onClick={onNext} className='original-text lessonBut'>Алга
        <span className="translated-text">Дальше</span>
      </button>
    </div>
  );
};

export default Block5;
