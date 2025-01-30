import React, {useContext, useEffect, useState} from 'react';
import AgeBar from "../components/AgeBar";
import LessonList from "../components/LessonList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAges, fetchCategories, fetchLessons} from "../http/lessonAPI";
import '../index.css';
import CategoryBar from '../components/CategoryBar';

// import { Link } from 'react-router-dom';

const Lessons = observer(() => {
    const {lesson} = useContext(Context)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAges().then(data => lesson.setAges(data))
        fetchCategories().then(data => lesson.setCategories(data))
        fetchLessons().then(data => {
            lesson.setLessons(data)
            // lesson.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchLessons().then(data => {
            lesson.setLessons(data);
            setLoading(false);
        });
    }, [lesson]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

return (
    <div className="container">
            <LessonList lessons={lesson.lessons}></LessonList>
            <div className="sidebar">
                <AgeBar></AgeBar>
                <CategoryBar></CategoryBar>
            </div>
        </div>
    );
})

export default Lessons;