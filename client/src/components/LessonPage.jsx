import React, { Suspense, lazy, useEffect, useState } from 'react';
import lessonBack from '../assets/lessonBack.jpg';
import { useParams, useNavigate } from 'react-router-dom';
import home from '../assets/home.svg';

const LessonPage = () => {
    const { lessonID } = useParams();
    const [LessonContent, setLessonContent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    // Находим заголовки по классам
    const SystemHeader = document.querySelector('.system-header');
    const ChildHeader = document.querySelector('.child_header');

    // Скрываем оба заголовка
    if (SystemHeader) SystemHeader.style.display = 'none';
    if (ChildHeader) ChildHeader.style.display = 'none';

    // Возвращаем стиль к исходному при демонтировании компонента
    return () => {
        if (SystemHeader) SystemHeader.style.display = '';
        if (ChildHeader) ChildHeader.style.display = '';
    };
    }, []);

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

    const backgroundStyle = {
        backgroundImage: `url(${lessonBack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return (
        <div style={backgroundStyle}>
            {/* <h1>Lesson {lessonID}</h1> */}
            <button className='backButton backLesson' onClick={() => navigate(-1)}>
                <img src={home} alt="Back"/>
                            <span>НА ГЛАВНУЮ</span>
                        </button>
            <Suspense fallback={<div>Загрузка...</div>}>
                {LessonContent ? <LessonContent /> : <p>Урок не найден.</p>}
            </Suspense>
        </div>
    );
};

export default LessonPage;