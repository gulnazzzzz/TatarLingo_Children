import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MaterialCategoryBar = observer(() => {
  const {material} = useContext(Context)
  return (
    <div className="category">
      {material.materialCategories.map((materialCategory, index) => (
        <button className="categoryButton" key={index} /* onClick={() => setSelectedBrand(materialCategory)} */ >
          {materialCategory.name}
        </button>
      ))}
    </div>
  );
});

export default MaterialCategoryBar;
