import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom"
import {Context} from "../index";
import {LESSON_ROUTE} from "../utils/consts";
import '../index.css';


const LessonList = observer(() => {
  const history = useNavigate()
  const {lesson} = useContext(Context)

  if (!lesson || !lesson.lessons) {
        return <div>Loading...</div>;  // Или другой индикатор загрузки
    }
    console.log(lesson.ages)
    console.log(lesson.lessons)

    return (
    <div className="lessons">
      {lesson.categories.map(lessonCategory => (
        <div key={lessonCategory.lessonCategoryID} className="category-section">
          <h2>{lessonCategory.name}</h2>
          <div className="lessons-grid">
            {lesson.lessons.filter(lesson => lesson.lessonCategoryLessonCategoryID === lessonCategory.lessonCategoryID).map(lesson => (
              <div onClick={() => history(LESSON_ROUTE + '/' + lesson.lessonID)} key={lesson.lessonID} className="lesson-block">
                <img width={150} height={150} src={process.env.REACT_APP_API_URL + lesson.img}  alt={lesson.title} />
                <p>{lesson.title}</p>
            </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default LessonList;