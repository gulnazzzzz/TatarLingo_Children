import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const MaterialCategoryBar = observer(() => {
  const { material } = useContext(Context);

  const handleCategoryClick = (materialCategory) => {
    material.setSelectedMaterialCategory(materialCategory);
  };

  const handleShowAllMaterials = () => {
    material.setSelectedMaterialCategory({}); // Сброс выбранной категории
  };

  return (
    <div className="category">
      <button className="categoryButton" onClick={handleShowAllMaterials}>Все материалы</button>
      {material.materialCategories.map(materialCategory => (
        <button className="categoryButton" key={materialCategory.materialCategoryID} onClick={() => handleCategoryClick(materialCategory)}>
          {materialCategory.name}
        </button>
      ))}
    </div>
  );
});

export default MaterialCategoryBar;
