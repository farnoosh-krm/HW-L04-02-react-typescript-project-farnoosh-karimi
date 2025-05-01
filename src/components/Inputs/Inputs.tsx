import React, { useState } from "react";

interface InputsProps {
  type: string;
  value?: string | number;
  placeholder: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  focusBorderColor: string;
}

const Inputs: React.FC<InputsProps> = ({
  type,
  value,
  placeholder,
  onchange,
  borderColor,
  focusBorderColor,
}) => {
  const [isFocused, setIsFocused] = useState(false); 

  return (
    <div className="relative">
      <input
        className="border-0 rounded-2xl p-2 mb-4 bg-white text-sm w-[300px] focus:outline-0"
        type={type}
        placeholder={placeholder}
        value={value}
        style={{ border: isFocused ? focusBorderColor : borderColor }} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} 
        onChange={onchange}
      />
    </div>
  );
};

export default Inputs;
