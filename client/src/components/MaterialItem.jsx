import React from 'react';
import '../index.css';
import word from '../assets/word.svg'

const MaterialItem = ({ material }) => {
    console.log(material)

    const materialUrl = `${process.env.REACT_APP_API_URL}static/${material.file}`

    return (
      <>
            <div className="device-card" data-file={materialUrl}>
                <img width={240} height={160} className="device-image" src={word} alt={material.title} />
            </div>
            <p>{material.title}</p>
      </>
    );
};

export default MaterialItem;