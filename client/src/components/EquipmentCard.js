import React from 'react';

// Component to display each equipment
function EquipmentCard({ equipment }) {
  return (
    <div className="equipment-card">
      <h2>{equipment.name}</h2>
      <p>{equipment.description}</p>
      <p><strong>{equipment.price}</strong></p>
    </div>
  );
}

export default EquipmentCard;
