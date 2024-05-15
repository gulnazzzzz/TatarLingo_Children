import React, {useContext, useEffect} from 'react';
import AgeBar from "../components/AgeBar";
import LessonList from "../components/LessonList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAges, fetchCategories, fetchLessons} from "../http/lessonAPI";
import '../index.css';
import CategoryBar from '../components/CategoryBar';

const Lessons = observer(() => {
    const {lesson} = useContext(Context)

    useEffect(() => {
        fetchAges().then(data => lesson.setAges(data))
        fetchCategories().then(data => lesson.setCategories(data))
        fetchLessons().then(data => {
            lesson.setLessons(data)
            // lesson.setTotalCount(data.count)
        })
    }, [])

    // useEffect(() => {
    //     fetchLessons(lesson.selectedType.id, lesson.selectedBrand.id).then(data => {
    //         lesson.setLessons(data.rows)
    //         // lesson.setTotalCount(data.count)
    //     })
    // }, [lesson.page, lesson.selectedType, lesson.selectedBrand,])

return (
    <div className="container">
            <div className="sidebar">
                <AgeBar></AgeBar>
                <CategoryBar></CategoryBar>
            </div>
            <LessonList></LessonList>
        </div>
    );
})

export default Lessons;