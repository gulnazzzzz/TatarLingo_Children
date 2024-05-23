import React from 'react';
import '../index.css';
import word from '../assets/word.svg';
import point from '../assets/point.svg';

const MaterialItem = ({ material }) => {
    const materialUrl = `${process.env.REACT_APP_API_URL}static/${material.file}`;
    const fileExtension = material.file.split('.').pop(); // Получаем расширение файла

    let imageSrc;
    // Определяем, какое изображение использовать в зависимости от расширения файла
    switch (fileExtension) {
        case 'docx':
            imageSrc = word;
            break;
        case 'pptx':
            imageSrc = point;
            break;
        default:
            imageSrc = ''; // Добавьте здесь путь к изображению по умолчанию, если требуется
            break;
    }

    return (
      <>
        <div className="materials-card">
          <a href={materialUrl} download={material.file} className="material-card-link">
            <div className="material-card" data-file={materialUrl}>
              <img width={60} height={60} className="material-image" src={imageSrc} alt={material.title} />
            </div>
          </a>
          <p className="event-title">{material.title}</p>
        </div>
      </>
    );
};

export default MaterialItem;