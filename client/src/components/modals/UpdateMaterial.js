import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { updateMaterial, fetchMaterialCategories, fetchOneMaterial, fetchMaterials } from '../../http/materialAPI'; // Добавлен импорт функции для загрузки списка материалов

const UpdateMaterial = observer(({ show, onHide }) => {
  const { material } = useContext(Context);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [selectedMaterialID, setSelectedMaterialID] = useState(null);
  const [loading, setLoading] = useState(true);

  // Загрузка списка материалов при монтировании компонента
  useEffect(() => {
    // Загружаем список материалов только если он еще не загружен
    if (material.materials.length === 0) {
      fetchMaterials().then(data => material.setMaterials(data));
    }
  }, [material]);

  useEffect(() => {
    if (selectedMaterialID) {
      setLoading(true);
      fetchOneMaterial(selectedMaterialID).then(materialData => {
        setTitle(materialData.title);
        material.setSelectedMaterialCategory(materialData.materialCategory);
        setLoading(false);
      });
    }
  }, [selectedMaterialID]);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const editMaterial = () => {
  // Проверяем, выбрана ли категория материала
  if (material.selectedMaterialCategory) {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    formData.append('materialCategoryMaterialCategoryID', material.selectedMaterialCategory.materialCategoryID);
    updateMaterial(selectedMaterialID, formData).then(data => onHide());
  } else {
    // Если категория не выбрана, отправляем запрос без изменения категории
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('title', title);
    updateMaterial(selectedMaterialID, formData).then(data => onHide());
  }
};

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Редактировать материал</h5>
          <button type="button" className="modalClose" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          {!selectedMaterialID ? (
            <div>
              <h5>Выберите материал для редактирования</h5>
              <ul>
                {material.materials.map(mat => (
                  <li  className='lessonAgeLi' key={mat.materialID} onClick={() => setSelectedMaterialID(mat.materialID)}>
                    {mat.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div className="dropdown">
                <button className="dropdown-toggle">{material.selectedMaterialCategory ? material.selectedMaterialCategory.name : "Выберите категорию"}</button>
                <div className="dropdown-menu">
                  {material.materialCategories.map(materialCategory => (
                    <div key={materialCategory.materialCategoryID} onClick={() => material.setSelectedMaterialCategory(materialCategory)}>
                      {materialCategory.name}
                    </div>
                  ))}
                </div>
              </div>
              <input className="modalForm"
                type="file"
                onChange={selectFile}
              />
              <input className="modalForm"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Введите название материала"
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button  className="modalClose" onClick={onHide}>Закрыть</button>
          {selectedMaterialID && <button  className="modalClick" onClick={editMaterial}>Сохранить изменения</button>}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default UpdateMaterial;
