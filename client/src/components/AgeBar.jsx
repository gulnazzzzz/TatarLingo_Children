import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AgeBar = observer(() => {
    const {lesson} = useContext(Context)
    return (
        <div className="ages">
          <h3>Возраст:</h3>
          <ul>
            {lesson.lessonAges.map(lessonAge => (
              <li /* active={lessonAge.lessonAgeID === lesson.selectedAge.lessonAgeLessonAgeID} */
                  onClick={() => lesson.setSelectedAge(lessonAge)} key={lessonAge.lessonAgeID}>{lessonAge.name}</li>
            ))}
          </ul>
        </div>
    );
});

export default AgeBar;