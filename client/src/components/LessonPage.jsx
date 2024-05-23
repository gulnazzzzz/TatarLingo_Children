import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LessonPage = () => {
    const { lessonID } = useParams();
    const [LessonContent, setLessonContent] = useState(null);

    useEffect(() => {
        import(`../pages/lessons/${lessonID}/Lesson${lessonID}`)
            .then(module => {
                setLessonContent(lazy(() => import(`../pages/lessons/${lessonID}/Lesson${lessonID}`)));
            })
            .catch(error => {
                console.error('Урок не найден', error);
                // Handle error
            });
    }, [lessonID]);

    return (
        <div>
            <h1>Lesson {lessonID}</h1>
            <Suspense fallback={<div>Загрузка...</div>}>
                {LessonContent ? <LessonContent /> : <p>Урок не найден.</p>}
            </Suspense>
        </div>
    );
};

export default LessonPage;
