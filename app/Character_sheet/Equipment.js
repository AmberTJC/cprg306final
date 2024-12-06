

import React, { useState } from 'react';



  
const Equipment = () => {
  const [equipment, setEquipment] = useState([
    { name: 'Iron sword', quantity: 1 },
    { name: 'Buckler', quantity: 1 },
    { name: 'Potion', quantity: 3 },
  ]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1 });

  
  const addItem = () => {
    if (newItem.name.trim() === '') return; 
    setEquipment([...equipment, { ...newItem, quantity: parseInt(newItem.quantity) || 1 }]);
    setNewItem({ name: '', quantity: 1 }); 
  };

  
  const removeItem = (index) => {
    setEquipment(equipment.filter((_, i) => i !== index));
  };

  
  const updateQuantity = (index, quantity) => {
    setEquipment(
      equipment.map((item, i) =>
        i === index ? { ...item, quantity: parseInt(quantity) || 0 } : item
      )
    );
  };

  return (
    <div>
      <h2><strong>Equipment</strong></h2>
      <ul>
        {equipment.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - 
            <input className='w-12 mx-2.5'
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
              
            />
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Item</h3>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input className='w-12 mx-2.5'
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          
        />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
};

export default Equipment;

  