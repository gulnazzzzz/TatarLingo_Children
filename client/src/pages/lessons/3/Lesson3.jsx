import React, { useState } from 'react';
import { Context } from "../../../index";
import '../../../index.css';
import FirstBlock from './components/FirstBlock'
import SecondBlock from './components/SecondBlock'

const Lesson3 = () => {
  // Состояния для управления текущим блоком и счетчиками ответов
  const [currentBlock, setCurrentBlock] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // Обработчик перехода к следующему блоку
  const handleNext = () => {
    setCurrentBlock(currentBlock + 1);
  };

  // Обработчик ответов
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      alert('Умница!'); // Можно заменить на более сложные модальные окна
    } else {
      setWrongAnswers(wrongAnswers + 1);
      alert('Попробуй еще раз!');
    }
  };

  // Рендеринг текущего блока в зависимости от состояния currentBlock
  const renderBlock = () => {
    switch(currentBlock) {
      case 0:
        return <FirstBlock onNext={handleNext} />;
      case 1:
        return <SecondBlock onAnswer={handleAnswer} onNext={handleNext} />;
      // Добавить другие блоки по аналогии
      default:
        return <div>Урок завершен</div>;
    }
  };

  return (
    <div>
      <div>Правильных ответов: {correctAnswers}</div>
      <div>Неправильных ответов: {wrongAnswers}</div>
      {renderBlock()}
    </div>
  );
};

export default Lesson3;
