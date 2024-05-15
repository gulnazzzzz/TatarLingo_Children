import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import MaterialItem from "./MaterialItem";
import '../index.css';

const MaterialList = observer(() => {
    const { material } = useContext(Context);

    if (!material.materials || material.materials.length === 0) {
        return <p>Загрузка материалов...</p>;
    }

    return (
        <div className="event-list">
            {material.materials.map(material => (
                <MaterialItem key={material.materialID} material={material} />
            ))}
        </div>
    );
});

export default MaterialList;

