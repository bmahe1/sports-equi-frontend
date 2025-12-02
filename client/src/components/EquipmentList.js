import React, { useState, useEffect } from 'react';
import EquipmentCard from './EquipmentCard';

// Example data for sports equipment (could be fetched from a backend later)
const equipmentData = [
  { id: 1, name: 'Soccer Ball', description: 'High quality soccer ball', price: '$20' },
  { id: 2, name: 'Tennis Racket', description: 'Lightweight and durable', price: '$35' },
  { id: 3, name: 'Baseball Glove', description: 'Perfect for beginners', price: '$25' },
];

function EquipmentList() {
  // In a real app, this could be fetched from an API
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    setEquipment(equipmentData);  // For now, we're using static data
  }, []);

  return (
    <div className="equipment-list">
      {equipment.map((item) => (
        <EquipmentCard key={item.id} equipment={item} />
      ))}
    </div>
  );
}

export default EquipmentList;
