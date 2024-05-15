import React, { useContext, useEffect } from 'react';
import MaterialCategoryBar from '../components/MaterialCategoryBar';
import MaterialList from '../components/MaterialList';
import '../index.css';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchMaterialCategories, fetchMaterials} from "../http/materialAPI";

const Materials = observer(() => {
    const { material } = useContext(Context);
    
    useEffect(() => {
    fetchMaterialCategories().then(data => {
        material.setMaterialCategories(data);
    });
    fetchMaterials().then(data => {
        material.setMaterials(data);
    });
}, []);

    useEffect(() => {
    if (material.selectedMaterialCategory) {
        fetchMaterials(material.selectedMaterialCategory.materialCategoryID).then(data => {
            material.setMaterials(data);
        });
    }
}, [material.selectedMaterialCategory]);

    return (
        <div className="events-container">
            <div className="sidebar">
                <MaterialCategoryBar />
            </div>
            <div className="main-content">
                <MaterialList />
            </div>
        </div>
    );
});

export default Materials;
