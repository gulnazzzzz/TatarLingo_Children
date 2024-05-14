import React, {useState} from 'react';
import CreateAge from "../components/modals/CreateAge";
import CreateCategory from "../components/modals/CreateCategory";
import CreateLesson from "../components/modals/CreateLesson";
import CreateMaterialCategory from "../components/modals/CreateMaterialCategory";
import CreateMaterial from "../components/modals/CreateMaterial";
import CreateEventCategory from "../components/modals/CreateEventCategory";
import CreateEvent from "../components/modals/CreateEvent";

const Admin = () => {
    const [lessonAgeVisible, setLessonAgeVisible] = useState(false)
    const [lessonCategoryVisible, setLessonCategoryVisible] = useState(false)
    const [lessonVisible, setLessonVisible] = useState(false)
    
    const [materialCategoryVisible, setMaterialCategoryVisible] = useState(false)
    const [materialVisible, setMaterialVisible] = useState(false)

    const [eventCategoryVisible, setEventCategoryVisible] = useState(false)
    const [eventVisible, setEventVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setLessonAgeVisible(true)} >
                Добавить возраст
            </button>
            <button onClick={() => setLessonCategoryVisible(true)} >
                Добавить категорию урока
            </button>
            <button onClick={() => setLessonVisible(true)} >
                Добавить урок
            </button>


            <button onClick={() => setMaterialCategoryVisible(true)} >
                Добавить категорию материалов
            </button>
            <button onClick={() => setMaterialVisible(true)} >
                Добавить материал
            </button>


            <button onClick={() => setEventCategoryVisible(true)} >
                Добавить категорию мероприятия
            </button>
            <button onClick={() => setEventVisible(true)} >
                Добавить мероприятие
            </button>
            <CreateAge show={lessonAgeVisible} onHide={() => setLessonAgeVisible(false)}/>
            <CreateCategory show={lessonCategoryVisible} onHide={() => setLessonCategoryVisible(false)}/>
            <CreateLesson show={lessonVisible} onHide={() => setLessonVisible(false)}/>
            <CreateMaterialCategory show={materialCategoryVisible} onHide={() => setMaterialCategoryVisible(false)}/>
            <CreateMaterial show={materialVisible} onHide={() => setMaterialVisible(false)}/>
            <CreateEventCategory show={eventCategoryVisible} onHide={() => setEventCategoryVisible(false)}/>
            <CreateEvent show={eventVisible} onHide={() => setEventVisible(false)}/>
        </div>
    );
};

export default Admin;
