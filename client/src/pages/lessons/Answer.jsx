import React, { useEffect, useRef } from 'react';
import one from '../../audios/бер.mp3';
import audioIcon from '../../assets/audio.svg';

const praiseMessages = [
  { audio: one, text: 'Молодец!', translation: 'Афарин!' },
  { audio: one, text: 'Отлично!', translation: 'Шэп!' }
];

const retryMessages = [
  { audio: one, text: 'Попробуй еще раз!', translation: 'Тагын бер тапкыр тырыш!' },
  { audio: one, text: 'Ой-ой!', translation: 'ой-ой!' }
];

const Answer = ({ isCorrect, onNext, onBack }) => {
  const audioRef = useRef(null);
  const message = isCorrect
    ? praiseMessages[Math.floor(Math.random() * praiseMessages.length)]
    : retryMessages[Math.floor(Math.random() * retryMessages.length)];



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
        <audio ref={audioRef} src={message.audio} />
        <img className='lessonImg' src={audioIcon} alt="Audio icon" onClick={handleAudioClick} />
        <p className='lessonText'>{message.text}</p>
        <p className='lessonText'>{message.translation}</p>
      </div>
      <div className="lessonButtons">
        
        {isCorrect ? (
          <button onClick={onBack} className='lessonButton'>Назад</button>
        ) : (
          <button onClick={onBack} className='lessonButton'>Попробовать снова</button> 
        )}
        <button onClick={onNext} className='lessonButton'>Дальше</button>
      </div>
    </div>
  );
};

export default Answer;
