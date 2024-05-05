import React, { useState } from 'react';
import './Accordion.css';
import openedIcon from '../assets/closed.png';
import closedIcon from '../assets/disclosed.png';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Хранение активного индекса

  const questionsAnswers = [
    {
      question: "У меня трое детей. Могу ли я зарегистрировать всех?",
      answer: "Да, конечно! Вы можете зарегистрировать всех своих детей. Для этого вам нужно создать аккаунты для каждого ребенка."
    },
    {
      question: "Какие материалы и ресурсы доступны для изучения татарского языка детьми?",
      answer: "Для изучения татарского языка детьми дошкольного возраста доступны различные книги, аудио-материалы, мультфильмы на татарском языке, игры и задания с элементами языка."
    },
    {
      question: "Как стимулировать интерес ребенка к изучению татарского языка?",
      answer: "Для стимулирования интереса ребенка к изучению татарского языка можно использовать интерактивные методики, поощрения, показывать положительные результаты и прогресс."
    },
    {
      question: "Как включить элементы татарской культуры в обучение языку детей дошкольного возраста?",
      answer: "Элементы татарской культуры можно включить в обучение языку через песни, сказки, народные игры, обычаи и традиции."
    },
    {
      question: "Как поддерживать и продолжать изучение языка после окончания вашего курса?",
      answer: "Для поддержания и продолжения изучения татарского языка после дошкольного возраста можно использовать курсы для детей постарше, онлайн-ресурсы, общение с носителями языка."
    }
  ];

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index); // Переключение активного элемента
  };

  return (
    <div className="mainQuestions__block">
      <div className="accordion">
        {questionsAnswers.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-item_title" onClick={() => toggleAccordion(index)}>
              <p >{item.question}</p>
              <img src={activeIndex === index ? openedIcon : closedIcon} alt={activeIndex === index ? "Открыть" : "Закрыть"} />
            </div>
            <div className={`content ${activeIndex === index ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
