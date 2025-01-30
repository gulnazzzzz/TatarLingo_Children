import React, { useState, useEffect, useRef } from 'react';
import кэжэ from '../../../../assets/кечкенэ кэжэ.svg';
import этэч from '../../../../assets/этэч.svg';
import эт from '../../../../assets/кечкенэ матур эт.svg';
import чэчэк from '../../../../assets/чэчэк.svg';
import сыер from '../../../../assets/кечкенэ  сыер.svg';
import one from '../../../../audios/рэсемдэ кемне курэсен.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../Answer';

const Block7 = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = кэжэ;

  const checkAnswer = () => {
    console.log('Selected image:', selectedImage);
    console.log('Correct answer:', correctAnswer);
    const isAnswerCorrect = selectedImage === correctAnswer;
    console.log('Is answer correct:', isAnswerCorrect);
    setIsCorrect(isAnswerCorrect);
    setShowAnswer(true);
    onAnswer(isAnswerCorrect);
  };

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

  const handleBack = () => {
    onBack();
  };

  return (
    <div className='lessonBlock'>
      {!showAnswer ? (
        <>
          <div className='audio-text'>
            <audio ref={audioRef} src={one} />
            <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
            <p className='original-text lessonText'>Рәсемдә кемне күрәсен?
              <span className="translated-text">Кого ты видишь на картинке?</span>
            </p>
          </div>
          <div className='centeredImageAns'>
            <img width={120} height={120} src={кэжэ} alt="Цифра 2"/>
          </div>
          <div className='lessonImages'>
            <div className='lessonImage textImages' style={{ border: selectedImage === кэжэ ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(кэжэ)} >
              <p src={кэжэ}>Кәҗә</p>
            </div>
            <div className='lessonImage textImages' style={{ border: selectedImage === этэч ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(этэч)} >
              <p src={этэч}>Әтәч</p>
            </div>
            <div className='lessonImage textImages' style={{ border: selectedImage === эт ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(эт)} >
              <p src={эт}>Эт</p>
            </div>
          </div>
          <div className='lessonButtons'>
            <button onClick={handleBack} className='original-text lessonButton AnswButton'>Артка
              <span className="translated-text">Назад</span>
            </button>
            <button onClick={checkAnswer} className='original-text lessonButton AnswButton' disabled={!selectedImage}>Җавап бирергә
          <span className="translated-text">Ответить</span>
        </button>
          </div>
        </>
      ) : (
        <>
          <div className='lessonImages'>
            {/* <div className='lessonImage' >
              <img src={bear2} style={{ border: selectedImage === bear2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="bear2"/>
            </div>
            <div className='lessonImage'>
              <img src={ball} style={{ border: selectedImage === ball ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="ball"/>
            </div>
            <div className='lessonImage' >
              <img src={ball2} style={{ border: selectedImage === ball2 ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="ball2"/>
            </div>
            <div className='lessonImage' >
              <img src={bear} style={{ border: selectedImage === bear ? (isCorrect ? '3px solid green' : '3px solid red') : '1px solid #C8C8C8' }} alt="bear"/>
            </div> */}
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} onBack={handleBack} />
        </>
      )}
    </div>
  );
};

export default Block7;
