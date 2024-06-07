import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { Context } from "../index";
import '../index.css';


const LessonList = observer(() => {
  const { lesson } = useContext(Context);

  if (!lesson || !lesson.filteredLessons) {
    return <div>Загрузка уроков...</div>;  // Или другой индикатор загрузки
  }

  // Группировка отфильтрованных уроков по категориям
  const categoriesWithLessons = lesson.categories.filter(category =>
    lesson.filteredLessons.some(lesson => lesson.lessonCategoryLessonCategoryID === category.lessonCategoryID)
  );

  return (
    <div className="lessons">
      {lesson.selectedAge && lesson.selectedAge.name && (
        <h1>{lesson.selectedAge.name}</h1>
      )}
      {categoriesWithLessons.map(lessonCategory => (
        <div key={lessonCategory.lessonCategoryID} className="category-section">
          <h2>{lessonCategory.name}</h2>
          <div className="lessons-grid">
            {lesson.filteredLessons.filter(lesson => lesson.lessonCategoryLessonCategoryID === lessonCategory.lessonCategoryID).map(lesson => (
              <Link key={lesson.lessonID} to={`/lesson/${lesson.lessonID}`}>
                <img width={150} height={150} src={process.env.REACT_APP_API_URL + `static/` + lesson.img} alt={lesson.title} />
                <p>{lesson.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default LessonList;
