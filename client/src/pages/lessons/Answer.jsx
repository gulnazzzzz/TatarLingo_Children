// import React, { useEffect, useRef } from 'react';
// import дорес from '../../audios/дорес.mp3';
// import молодец from '../../audios/молодец.mp3';
// import шэп from '../../audios/шэп.mp3';
// import эфэрин from '../../audios/эфэрин.mp3';

// import дорестугел from '../../audios/дорес тугел.mp3';
// import уйлапкара from '../../audios/уйлап кара азамат.mp3';
// import юк from '../../audios/ююююк.mp3';
// import ойой from '../../audios/ой ой Азамат .mp3';

// import audioIcon from '../../assets/audio.svg';

// const praiseMessages = [
//   { audio: молодец, text: 'Молодец!', translation: 'Афәрин!' },
//   { audio: эфэрин, text: 'Молодец!', translation: 'Афәрин!' },
//   { audio: шэп, text: 'Отлично!', translation: 'Шәп!' },
//   { audio: дорес, text: 'Правильно!', translation: 'Дөрес!' },
// ];

// const retryMessages = [
//   { audio: дорестугел, text: 'Неверно!', translation: 'Дөрес түгел!' },
//   { audio: ойой, text: 'Ой-ой!', translation: '' },
//   { audio: юк, text: 'Нет.', translation: 'Юк.' },
//   { audio: уйлапкара, text: 'Подумай еще раз.', translation: 'Уйлап кара.' }
// ];

// const Answer = ({ isCorrect, onNext, onBack, setShowAnswer }) => {
//   const audioRef = useRef(null);
//   const message = isCorrect
//     ? praiseMessages[Math.floor(Math.random() * praiseMessages.length)]
//     : retryMessages[Math.floor(Math.random() * retryMessages.length)];

//   useEffect(() => {
//     console.log("Selected message audio:", message.audio);
//     const timer = setTimeout(() => {
//       if (audioRef.current) {
//         audioRef.current.play().catch(error => console.error("Audio play error:", error));
//       }
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [message]);

//   const handleAudioClick = () => {
//     if (audioRef.current) {
//       audioRef.current.play().catch(error => console.error("Audio play error:", error));
//     }
//   };

//   return (
//     <div className='lessonBlock'>
//       <div className='audio-text'>
//         <audio ref={audioRef} src={message.audio} />
//         <img className='lessonImg' src={audioIcon} alt="Audio icon" onClick={handleAudioClick} />
//         <p className='lessonText'>{message.text}</p>
//         <p className='lessonText'>{message.translation}</p>
//       </div>
//       <div className="lessonButtons">
//         <button onClick={onBack} className='original-text lessonButton lessonReturnToTask'>Артка
//           <span className="translated-text">Назад</span>
//         </button>
//         <button onClick={onNext} className='original-text lessonButton'>Алга
//           <span className="translated-text">Вперед</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Answer;


import React, { useEffect, useRef } from 'react';
import дорес from '../../audios/дорес.mp3';
import молодец from '../../audios/молодец.mp3';
import шэп from '../../audios/шэп.mp3';
import эфэрин from '../../audios/эфэрин.mp3';

import дорестугел from '../../audios/дорес тугел.mp3';
import уйлапкара from '../../audios/уйлап кара азамат.mp3';
import юк from '../../audios/ююююк.mp3';

import audioIcon from '../../assets/audio.svg';

const praiseMessages = [
  { audio: молодец, text: 'Молодец!', translation: 'Афәрин!' },
  { audio: эфэрин, text: 'Молодец!', translation: 'Афәрин!' },
  { audio: шэп, text: 'Отлично!', translation: 'Шәп!' },
  { audio: дорес, text: 'Правильно!', translation: 'Дөрес!' },
];

const retryMessages = [
  { audio: дорестугел, text: 'Неверно!', translation: 'Дөрес түгел!' },
  { audio: юк, text: 'Нет.', translation: 'Юк.' },
  { audio: уйлапкара, text: 'Подумай еще раз.', translation: 'Уйлап кара.' }
];

const Answer = ({ isCorrect, onNext, onBack, setShowAnswer }) => {
  const audioRef = useRef(null);
  const message = isCorrect
    ? praiseMessages[Math.floor(Math.random() * praiseMessages.length)]
    : retryMessages[Math.floor(Math.random() * retryMessages.length)];

  useEffect(() => {
    console.log("Selected message:", message);
    const timer = setTimeout(() => {
      if (audioRef.current) {
        console.log("Playing audio:", message.audio);
        audioRef.current.play().catch(error => console.error("Audio play error:", error));
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [message]);

  const handleAudioClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio play error:", error));
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
        <button onClick={onBack} className='original-text lessonButton lessonReturnToTask'>Артка
          <span className="translated-text">Назад</span>
        </button>
        <button onClick={onNext} className='original-text lessonButton'>Алга
          <span className="translated-text">Вперед</span>
        </button>
      </div>
    </div>
  );
};

export default Answer;
