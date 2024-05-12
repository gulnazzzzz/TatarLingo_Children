import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createMaterialCategory = async (materialCategory) => {
    const {data} = await $authHost.post('api/materialCategory', materialCategory)
    return data
}

export const fetchMaterialCategories = async () => {
    const {data} = await $host.get('api/materialCategory')
    return data
}

export const createMaterial = async (material) => {
    const {data} = await $authHost.post('api/material', material)
    return data
}

export const fetchMaterials = async (materialCategoryMaterialCategoryID) => {
    const {data} = await $host.get('api/material', {params: {
            materialCategoryMaterialCategoryID
        }})
    return data
}

// export const fetchOneDevice = async (id) => {
//     const {data} = await $host.get('api/device/' + id)
//     return data
// }
