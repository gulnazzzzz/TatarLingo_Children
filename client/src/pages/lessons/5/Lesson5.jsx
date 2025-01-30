import React, { useState, useEffect, useRef } from 'react';
import '../../../index.css';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Block4 from './components/Block4';
import Block5 from './components/Block5';
import Block6 from './components/Block6';
import Block7 from './components/Block7';
import Block8 from './components/Block8';
import Block9 from './components/Block9';
import Block10 from './components/Block10';
import Block11 from './components/Block11';
import Answer from '../../lessons/Answer';
import тубэтэй from '../../../assets/тубэтэй.pdf';
import correct from '../../../assets/true.svg';
import wrong from '../../../assets/false.svg';
import one from '../../../audios/дэрес тэмам.mp3';
import audio from '../../../assets/audio.svg';

const Lesson5 = () => {
  const audioRef = useRef(null);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

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

  const handleNext = () => {
    setCurrentBlock(prevBlock => prevBlock + 1);
    setShowAnswer(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = тубэтэй;
    link.download = 'тубэтэй.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBack = () => {
    if (currentBlock > 0) {
      setCurrentBlock(prevBlock => prevBlock - 1);
      setShowAnswer(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [currentBlock]: isCorrect }));
    if (isCorrect) {
      setCorrectAnswers(prevCount => prevCount + 1);
    } else {
      setWrongAnswers(prevCount => prevCount + 1);
    }
    setShowAnswer(true);
  };

  const renderBlock = () => {
    if (showAnswer) {
      return <Answer isCorrect={answers[currentBlock]} onBack={handleBack} onNext={handleNext} setShowAnswer={setShowAnswer} />;
    }
    switch (currentBlock) {
      case 0:
        return <Block1 onNext={handleNext} />;
      case 1:
        return <Block2 onAnswer={handleAnswer} onBack={handleBack} />;
      case 2:
        return <Block3 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Block4 onAnswer={handleAnswer} onBack={handleBack}/>;
      case 4:
        return <Block5 onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Block6 onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <Block7 onAnswer={handleAnswer} onBack={handleBack} />;
      case 7:
        return <Block8 onNext={handleNext} onBack={handleBack} />;
      case 8:
        return <Block9 onNext={handleNext} onBack={handleBack} />;
      case 9:
        return <Block10 onNext={handleNext} onBack={handleBack} />;
      case 10:
        return <Block11 onAnswer={handleAnswer} onBack={handleBack} />;
      case 11:
        return (
          <div className='lessonEnd'>
            <div className='endText'>
              <div className='audio-text'>
                <audio ref={audioRef} src={one} />
                <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
                <p className='lessonText'>Урок завершен!</p>
              </div>
              <p>Молодец! Продолжай в том же духе, ты на правильном пути!</p>
            </div>
            <div className='endText'>
              <div className='audio-text'>
                <audio ref={audioRef} src={one} />
                <img className='lessonImg' src={audio} alt="Audio icon" onClick={handleAudioClick} />
                <p className='lessonText'>Дәрес тәмам!</p>
              </div>
              <p>Афәрин! Шушы рухта дәвам ит, син дөрес юлда!</p>
            </div>
            <div className='lessonEndButtons'>
              <button className='lessonEndButton getAward original-text AnswButton lessonButton' onClick={handleDownload}>Бүләк
                <span className="translated-text">Подарок</span>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="centeredContainer">
      <div className="correct-wrongAnswers">
        <div className="correct-wrongAnswerBlock">
          <div>{correctAnswers}</div>
          <div><img src={correct} className='correctWrongImg' alt="Correct answers" /></div>
        </div>
        <div className="correct-wrongAnswerBlock">
          <div>{wrongAnswers}</div>
          <div><img src={wrong} className='correctWrongImg' alt="Wrong answers" /></div>
        </div>
      </div>
      {renderBlock()}
    </div>
  );
};

export default Lesson5;
