import React, { createContext, useState, useEffect } from 'react';
import { fetchMaterials, fetchMaterialCategories } from '../http/materialAPI';

export const MaterialContext = createContext();

export const MaterialProvider = ({ children }) => {
  const [materialCategories, setMaterialCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [selectedMaterialCategory, setSelectedMaterialCategory] = useState(null);

  useEffect(() => {
    fetchMaterialCategories().then(data => setMaterialCategories(data));
    fetchMaterials().then(data => setMaterials(data));
  }, []);

  return (
    <MaterialContext.Provider value={{
      materialCategories,
      materials,
      selectedMaterialCategory,
      setSelectedMaterialCategory,
      setMaterials
    }}>
      {children}
    </MaterialContext.Provider>
  );
};
