import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._eventCategories = [
            {eventCategoryID: 1, name: "Концерты"},
            {eventCategoryID: 2, name: "Музеи"},
            {eventCategoryID: 3, name: "Мастер-классы"}
        ]
        this._events = [
            {eventID: 1, img: `https://unsplash.com/photos/yellow-flowers-on-brown-wooden-table-KGkudMJcKy4`, title: "Мульт концерт", description: "Тут описание мульт концерта", dateAndTime: "10 мая, 14:00", location: "Театр Камала", link: "https://kamalteatr.ru/about-the-theatre/repertoire/multkontsert-kontsert-solistov-orkestra-teatra-kamala/"},
        ]
        // this._selectedAge = {

        // }
        // this._selectedCategory = {

        // }
        makeAutoObservable(this)
    }

    setAges(eventCategories) {
        this._eventCategories = eventCategories
    }
    setCategories(events) {
        this._events = events
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

    get eventCategories() {
        return this._eventCategories
    }
    get events() {
        return this._events
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
