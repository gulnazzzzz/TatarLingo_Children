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
        <div className="many-container">
            <div className="radius-container">
                <div className='radius-container-content'>
                    <p className='page-title'>Образовательные материалы для дополнительного изучения языка</p>
                    <div>
                        <div className="category">
                            <MaterialCategoryBar />
                        </div>
                        <div className="cards main-content">
                            <MaterialList />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    );
});

export default Materials;
