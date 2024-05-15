import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MaterialCategoryBar = observer(() => {
  const {material} = useContext(Context)
  return (
    <div className="event-category-bar">
      {material.materialCategories.map((materialCategory, index) => (
        <button key={index} /* onClick={() => setSelectedBrand(materialCategory)} */ >
          {materialCategory.name}
        </button>
      ))}
    </div>
  );
});

export default MaterialCategoryBar;
