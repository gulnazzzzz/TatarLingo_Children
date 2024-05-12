import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";

export const createAge = async (lessonAge) => {
    const {data} = await $authHost.post('api/lessonAge', lessonAge)
    return data
}

export const fetchAges = async () => {
    const {data} = await $host.get('api/lessonAge')
    return data
}

export const createCategory = async (lessonCategory) => {
    const {data} = await $authHost.post('api/lessonCategory', lessonCategory)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/lessonCategory', )
    return data
}

export const createLesson = async (lesson) => {
    const {data} = await $authHost.post('api/lesson', lesson)
    return data
}

export const fetchLessons = async (lessonAgeLessonAgeID, lessonCategoryLessonCategoryID) => {
    const {data} = await $host.get('api/lesson', {params: {
            lessonAgeLessonAgeID, lessonCategoryLessonCategoryID
        }})
    return data
}

export const fetchOneDevice = async (lessonID) => {
    const {data} = await $host.get('api/lesson/' + lessonID)
    return data
}
