import {makeAutoObservable} from "mobx";

export default class MaterialStore {
    constructor() {
        this._materialCategories = [
            {materialCategoryID: 1, name: "Игры"},
            {materialCategoryID: 2, name: "Задания"},
            {materialCategoryID: 3, name: "Тексты"}
        ]
        this._materials = [
            {materialID: 1, title: "Конспект на тему", img: `b67ed484-e5e7-45b8-b2af-5a13cd559dbf.docx`},
            {materialID: 2, title: "Файл", img: `b67ed484-e5e7-45b8-b2af-5a13cd559dbf.docx`},
            {materialID: 3, title: "Файл не пустой", img: `b67ed484-e5e7-45b8-b2af-5a13cd559dbf.docx`},
        ]
        // this._selectedAge = {

        // }
        // this._selectedCategory = {

        // }
        makeAutoObservable(this)
    }

    setMaterialCategories(materialCategories) {
        this._materialCategories = materialCategories
    }
    setMaterials(materials) {
        this._materials = materials
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

    get materialCategories() {
        return this._materialCategories
    }
    get materials() {
        return this._materials
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
