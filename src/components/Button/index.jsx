import React from 'react';

const Button = ({ color = 'bg-blue-700', hoverColor = 'hover:bg-blue-900', textColor = 'text-white', paddingX = 'px-3', paddingY = 'py-2' , textFont= 'text-sm',children }) => {
  return (
    <butto
      className={`${color} ${hoverColor} ${textColor} ${paddingX} ${paddingY} ${textFont} italic font-Heebo cursor-pointer text-sm font-semibold rounded-3xl transition ease-in-out duration-200`}
    >
      {children}
    </butto>
  );
};

export default Button;