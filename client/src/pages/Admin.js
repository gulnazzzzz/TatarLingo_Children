import React, {useState} from 'react';
import CreateAge from "../components/modals/CreateAge";
import CreateCategory from "../components/modals/CreateCategory";
import CreateLesson from "../components/modals/CreateLesson";

const Admin = () => {
    const [lessonAgeVisible, setLessonAgeVisible] = useState(false)
    const [lessonCategoryVisible, setLessonCategoryVisible] = useState(false)
    const [lessonVisible, setLessonVisible] = useState(false)

    return (
        <div>
            <button
                onClick={() => setLessonAgeVisible(true)}
            >
                Добавить возраст
            </button>
            <button
                onClick={() => setLessonCategoryVisible(true)}
            >
                Добавить категорию урока
            </button>
            <button
                onClick={() => setLessonVisible(true)}
            >
                Добавить урок
            </button>
            <CreateAge show={lessonAgeVisible} onHide={() => setLessonAgeVisible(false)}/>
            <CreateCategory show={lessonCategoryVisible} onHide={() => setLessonCategoryVisible(false)}/>
            <CreateLesson show={lessonVisible} onHide={() => setLessonVisible(false)}/>
        </div>
    );
};

export default Admin;
