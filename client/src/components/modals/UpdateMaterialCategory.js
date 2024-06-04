import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { updateMaterialCategory, fetchMaterialCategories } from '../../http/materialAPI';

const UpdateMaterialCategory = observer(({ show, onHide }) => {
  const { material } = useContext(Context);
  const [categoryName, setCategoryName] = useState('');
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);

  useEffect(() => {
    if (selectedCategoryID) {
      const selectedCategory = material.materialCategories.find(cat => cat.materialCategoryID === selectedCategoryID);
      if (selectedCategory) {
        setCategoryName(selectedCategory.name);
        material.setSelectedMaterialCategory(selectedCategory);
      }
    }
  }, [selectedCategoryID, material.materialCategories, material]);

  const editMaterialCategory = () => {
    if (selectedCategoryID) {
      updateMaterialCategory(selectedCategoryID, { name: categoryName }).then(() => {
        fetchMaterialCategories().then(data => {
          material.setMaterialCategories(data);
          material.setSelectedMaterialCategory(null);
          setSelectedCategoryID(null);
          setCategoryName('');
          onHide();
        });
      });
    }
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Редактировать категорию материала</h5>
          <button type="button" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          {!selectedCategoryID ? (
            <div>
              <h5>Выберите категорию для редактирования</h5>
              <ul>
                {material.materialCategories.map(cat => (
                  <li key={cat.materialCategoryID} onClick={() => setSelectedCategoryID(cat.materialCategoryID)}>
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <input
                type="text"
                value={categoryName}
                onChange={e => setCategoryName(e.target.value)}
                placeholder="Введите название категории"
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onHide}>Закрыть</button>
          {selectedCategoryID && <button onClick={editMaterialCategory}>Сохранить изменения</button>}
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default UpdateMaterialCategory;
