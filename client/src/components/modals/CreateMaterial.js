import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createMaterial, fetchMaterialCategories, fetchMaterials } from '../../http/materialAPI';

const CreateMaterial = observer(({ show, onHide }) => {
    const { material } = useContext(Context);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchMaterialCategories().then(data => material.setMaterialCategories(data));
    }, [material]);
    
    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addMaterial = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('materialCategoryMaterialCategoryID', material.selectedMaterialCategory.materialCategoryID);
        createMaterial(formData).then(data => onHide());
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Добавить материал</h5>
                    <button type="button" className="modalClose" onClick={onHide}>×</button>
                </div>
                <div className="modal-body">
                    <div className="dropdown">
                        <button className="dropdown-toggle">{material.selectedMaterialCategory.name || "Выберите категорию"}</button>
                        <div className="dropdown-menu">
                            {material.materialCategories.map(materialCategory => (
                                <div key={materialCategory.materialCategoryID} onClick={() => material.setSelectedMaterialCategory(materialCategory)}>
                                    {materialCategory.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <input
                        type="file"
                        onChange={selectFile}
                    />
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название мероприятия"
                    />
                    
                </div>
                <div className="modal-footer">
                    <button className="modalClose" onClick={onHide}>Закрыть</button>
                    <button className="modalClick" onClick={addMaterial}>Добавить</button>
                </div>
            </div>
            <div className="modal-backdrop" onClick={onHide}></div>
        </div>
    );
});

export default CreateMaterial;