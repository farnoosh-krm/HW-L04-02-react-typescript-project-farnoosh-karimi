import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  label: string;
  widthBtn: string;
  colorBtn?: string; // رنگ اصلی دکمه
  colorBtnText?: string; // رنگ متن دکمه
  colorBtnHover?: string; // رنگ دکمه در حالت hover
  colorBtnActive?: string; // رنگ دکمه در حالت active
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  widthBtn,
  colorBtn = 'bg-gray-800', 
  colorBtnText = 'text-white', 
  colorBtnHover = 'hover:bg-gray-800', 
  colorBtnActive = 'active:bg-gray-400', 
  onclick,
}) => {
  return (
    <div>
      <button
    
        className={`p-1.5 rounded-2xl shadow-lg shadow-black/30 mt-2 ml-2 hover:cursor-pointer hover:text-white font-medium ${colorBtn} ${colorBtnText} ${colorBtnHover} ${colorBtnActive}`}
        type={type}
        style={{ width: widthBtn ,backgroundColor: colorBtn, color: colorBtnText }}
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

