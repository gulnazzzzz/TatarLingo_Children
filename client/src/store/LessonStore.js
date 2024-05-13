import {makeAutoObservable} from "mobx";

export default class LessonStore {
    constructor() {
        this._ages = []
        this._categories = []
        this._lessons = [
            {lessonID: 1, title: "Цифры 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
            {lessonID: 2, title: "Эйдэ саныйбыз 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
            {lessonID: 3, title: "Эйдэ санамыйбыз 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
        ]
        this._selectedAge = {}
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setAges(ages) {
        this._ages = ages
    }
    setCategories(categories) {
        this._categories = categories
    }
    setLessons(lessons) {
        this._lessons = lessons
    }

    setSelectedAge(lessonAge) {
        this._selectedAge = lessonAge
    }
    setSelectedCategory(lessonCategory) {
        this._selectedCategory = lessonCategory
    }

    get ages() {
        return this._ages
    }
    get categories() {
        return this._categories
    }
    get lessons() {
        return this._lessons
    }
    get selectedAge() {
        return this._selectedAge
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}
