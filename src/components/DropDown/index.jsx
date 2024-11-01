import React, { useState } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <details className="w-1/2 border rounded-lg bg-gray-50 shadow">
      <summary 
        onClick={toggleDropdown} 
        className="flex items-center p-4 justify-between cursor-pointer text-lg text-gray-800 font-semibold"
      >
        {title}
        <span className="text-4xl font-bold">
        {isOpen ? <Minus size={28} weight="bold" /> : <Plus size={28} weight="bold" />}
        </span>
      </summary>
      <hr />
      <div className="mt-2 text-gray-500 p-4">
        {children}
      </div>
    </details>
  );
}

export default Dropdown;
