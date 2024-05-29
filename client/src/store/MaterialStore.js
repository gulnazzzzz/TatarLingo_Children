import { makeAutoObservable } from "mobx";

export default class MaterialStore {
    constructor() {
        this._materialCategories = [];
        this._materials = [];
        this._selectedMaterialCategory = {};
        this._filteredMaterials = []; // Добавить новое свойство
        makeAutoObservable(this);
    }

    setMaterialCategories(materialCategories) {
        this._materialCategories = materialCategories;
    }

    setMaterials(materials) {
        this._materials = materials;
        this.filterMaterials(); // Вызов метода фильтрации после обновления материалов
    }

    setSelectedMaterialCategory(materialCategory) {
        this._selectedMaterialCategory = materialCategory;
        this.filterMaterials(); // Вызов метода фильтрации при выборе категории
    }

    filterMaterials() {
        if (!this._selectedMaterialCategory || !this._selectedMaterialCategory.materialCategoryID) {
            this._filteredMaterials = this._materials;
        } else {
            this._filteredMaterials = this._materials.filter(material => material.materialCategoryMaterialCategoryID === this._selectedMaterialCategory.materialCategoryID);
        }
    }

    get materialCategories() {
        return this._materialCategories;
    }

    get materials() {
        return this._materials;
    }

    get selectedMaterialCategory() {
        return this._selectedMaterialCategory;
    }

    get filteredMaterials() {
        return this._filteredMaterials;
    }
}
