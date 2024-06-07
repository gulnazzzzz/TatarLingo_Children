import React, { useEffect, useRef } from 'react';
import bear1 from '../../../../assets/аю1.svg';
import one from '../../../../audios/бер.mp3';
import audio from '../../../../assets/audio.svg';

const ThirdBlock = ({ onNext, onBack }) => {
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
        <p className='lessonText'>Бер аю.</p>
      </div>
      <div className='centeredImage'>
        <img src={bear1} alt="Число 3"/>
      </div>
      <button onClick={onNext} className='lessonBut'>Дальше</button>
    </div>
  );
};

export default ThirdBlock;
