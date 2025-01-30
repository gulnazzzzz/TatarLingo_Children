import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import '../index.css';

const AgeBar = observer(() => {
    const { lesson } = useContext(Context);

    const handleShowAllAges = () => {
        lesson.setSelectedAge({});
    };

    return (
        <div className="ages">
            <h3 className='lessonCategoryH3'>Возраст:</h3>
            
            <ul className='lessonAgeUl'>
                <li  className='lessonAgeLi' onClick={handleShowAllAges}>Все возрасты</li>
                {lesson.ages.map(lessonAge => (
                    <li className='lessonAgeLi' key={lessonAge.lessonAgeID} onClick={() => lesson.setSelectedAge(lessonAge)}>
                        {lessonAge.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default AgeBar;
