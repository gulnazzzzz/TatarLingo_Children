import {makeAutoObservable} from "mobx";

export default class LessonStore {
    constructor() {
        this._ages = [
          {lessonAgeID: 1, name: "3 года"},
          {lessonAgeID: 2, name: "4 года"},
          {lessonAgeID: 3, name: "5 лет"},
          {lessonAgeID: 4, name: "6 лет"},
          {lessonAgeID: 5, name: "7 лет"},
          {lessonAgeID: 6, name: "8 лет"}
        ]
        this._categories = [
          {lessonCategoryID: 1, name: "Учим цифры"},
          {lessonCategoryID: 2, name: "Учим буквы"},
          {lessonCategoryID: 3, name: "Учим слова"}
        ]
        this._lessons = [
          {lessonID: 1, title: "Цифры 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
          {lessonID: 2, title: "Эйдэ саныйбыз 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
          {lessonID: 3, title: "Эйдэ санамыйбыз 1, 2, 3", img: `https://unsplash.com/photos/a-large-building-with-a-clock-tower-in-the-middle-of-a-garden-dyMIyTQloTU`},
        ]
        // this._selectedAge = {

        // }
        // this._selectedCategory = {

        // }
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

    // setSelectedType(type) {
    //     this.setPage(1)
    //     this._selectedType = type
    // }
    // setSelectedBrand(brand) {
    //     this.setPage(1)
    //     this._selectedBrand = brand
    // }
    // setPage(page) {
    //     this._page = page
    // }
    // setTotalCount(count) {
    //     this._totalCount = count
    // }

    get ages() {
        return this._ages
    }
    get categories() {
        return this._categories
    }
    get lessons() {
        return this._lessons
    }
    // get selectedType() {
    //     return this._selectedType
    // }
    // get selectedBrand() {
    //     return this._selectedBrand
    // }
    // get totalCount() {
    //     return this._totalCount
    // }
    // get page() {
    //     return this._page
    // }
    // get limit() {
    //     return this._limit
    // }
}
