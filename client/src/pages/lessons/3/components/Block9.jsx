import React, { useState, useEffect, useRef } from 'react';
import блокмалай from '../../../../assets/блок малай.svg';
import ball from '../../../../assets/1туп.svg';
import ботка from '../../../../assets/ботка.svg';
import жилэк from '../../../../assets/жилэк.svg';
import су from '../../../../assets/блок су.svg';
import блок3туп from '../../../../assets/блок3туп.svg';
import one from '../../../../audios/оч тупны тап.mp3';
import audio from '../../../../assets/audio.svg';
import Answer from '../../Answer';

const Block9 = ({ onAnswer, onBack, onNext }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const audioRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const correctAnswer = блок3туп;

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
            <p className='original-text lessonText'>Өч тупны тап.
              <span className="translated-text">Найди три мяча.</span>
            </p>
          </div>
          <div className='lessonImages'>
            <div className='lessonImage fourImages' style={{ border: selectedImage === блокмалай ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(блокмалай)} >
              <img src={блокмалай} alt="блокмалай" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === ball ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(ball)}>
              <img src={ball} alt="ball" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === жилэк ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(жилэк)}>
              <img src={жилэк} alt="ball" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === ботка ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(ботка)} >
              <img src={ботка} alt="ball2"/>
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === су ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(су)}>
              <img src={су} alt="ball" />
            </div>
            <div className='lessonImage fourImages' style={{ border: selectedImage === блок3туп ? '1px solid #656565' : '1px solid #C8C8C8' }} onClick={() => setSelectedImage(блок3туп)} >
              <img src={блок3туп} alt="bear"/>
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
            <div className='lessonImage' >
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
            </div>
          </div>
          <Answer isCorrect={isCorrect} onNext={onNext} onBack={handleBack} />
        </>
      )}
    </div>
  );
};

export default Block9;
