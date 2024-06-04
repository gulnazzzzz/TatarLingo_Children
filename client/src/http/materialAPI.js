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


export const fetchOneMaterial = async (materialID) => {
    const { data } = await $host.get('api/material/' + materialID);
    return data;
};

// export const updateMaterial = async (materialID, material) => {
//     const { data } = await $authHost.put('api/material/' + materialID, material);
//     return data;
// };

export const updateMaterial = async (materialID, material) => {
    if (!materialID) {
        console.error("Material ID is missing or invalid.");
        return; // Прерываем выполнение функции, если materialID не задан или пуст
    }

    const { data } = await $authHost.put('api/material/' + materialID, material);
    return data;
};

export const deleteMaterial = async (materialID) => {
    const { data } = await $authHost.delete(`api/material/${materialID}`);
    return data;
};

export const updateMaterialCategory = async (materialCategoryID, updatedCategory) => {
  const { data } = await $authHost.put(`api/materialCategory/${materialCategoryID}`, updatedCategory);
  return data;
};