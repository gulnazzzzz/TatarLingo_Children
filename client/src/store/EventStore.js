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
        this._selectedEventCategory = {

        }
        makeAutoObservable(this)
    }

    setEventCategories(eventCategories) {
        this._eventCategories = eventCategories
    }
    setEvents(events) {
        this._events = events
    }
    
    setSelectedEventCategory(eventCategory) {
        this._selectedEventCategory = eventCategory
    }

    get eventCategories() {
        return this._eventCategories
    }
    get events() {
        return this._events
    }
    
    get selectedEventCategory() {
        return this._selectedEventCategory
    }
}
