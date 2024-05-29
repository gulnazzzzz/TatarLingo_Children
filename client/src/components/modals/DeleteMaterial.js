import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { deleteMaterial, fetchMaterials } from '../../http/materialAPI';

const DeleteMaterial = observer(({ show, onHide }) => {
  const { material } = useContext(Context);
  const [selectedMaterialID, setSelectedMaterialID] = useState('');

  const handleDelete = async () => {
    if (!selectedMaterialID) {
      return;
    }

    try {
      await deleteMaterial(selectedMaterialID);
      const updatedMaterials = await fetchMaterials();
      material.setMaterials(updatedMaterials);
      setSelectedMaterialID('');
      onHide();
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Удалить материал</h5>
          <button type="button" onClick={onHide}>×</button>
        </div>
        <div className="modal-body">
          <select value={selectedMaterialID} onChange={e => setSelectedMaterialID(e.target.value)}>
            <option value="">Выберите материал для удаления</option>
            {material.materials.map(mat => (
              <option key={mat.materialID} value={mat.materialID}>
                {mat.title}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={onHide}>Закрыть</button>
          <button onClick={handleDelete} disabled={!selectedMaterialID}>Удалить</button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onHide}></div>
    </div>
  );
});

export default DeleteMaterial;
