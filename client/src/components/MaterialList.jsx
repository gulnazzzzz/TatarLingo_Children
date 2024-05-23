import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import MaterialItem from "./MaterialItem";
import '../index.css';

const MaterialList = observer(() => {
    const { material } = useContext(Context);

    if (!material.filteredMaterials || material.filteredMaterials.length === 0) {
        return <p>Нет материалов для отображения</p>;
    }

    return (
        <div className="cards">
            {material.filteredMaterials.slice().reverse().map(material => (
                <MaterialItem className="card" key={material.materialID} material={material} />
            ))}
        </div>
    );
});

export default MaterialList;
