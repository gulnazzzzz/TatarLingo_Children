import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const AgeBar = observer(() => {
    const { lesson } = useContext(Context);

    const handleShowAllAges = () => {
        lesson.setSelectedAge({});
    };

    return (
        <div className="ages">
            <h3>Возраст:</h3>
            <button onClick={handleShowAllAges}>Все возрасты</button>
            <ul>
                {lesson.ages.map(lessonAge => (
                    <li key={lessonAge.lessonAgeID} onClick={() => lesson.setSelectedAge(lessonAge)}>
                        {lessonAge.name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default AgeBar;
