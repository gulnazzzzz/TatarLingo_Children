import {makeAutoObservable} from "mobx";

export default class MaterialStore {
    constructor() {
        this._materialCategories = []
        this._materials = []
        this._selectedMaterialCategory = {

        }
        makeAutoObservable(this)
    }

    setMaterialCategories(materialCategories) {
        this._materialCategories = materialCategories
    }
    setMaterials(materials) {
        this._materials = materials
    }

    setSelectedMaterialCategory(materialCategory) {
        this._selectedMaterialCategory = materialCategory
    }

    get materialCategories() {
        return this._materialCategories
    }
    get materials() {
        return this._materials
    }
    get selectedMaterialCategory() {
        return this._selectedMaterialCategory
    }
}
