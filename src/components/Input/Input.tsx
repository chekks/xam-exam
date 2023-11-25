import React from 'react';

interface InputFieldProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder }) => {
    return (
        <label className="block mb-4">
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="form-input mt-1 block w-full border-2 border-black p-1.5 placeholder-black"
            placeholder={placeholder}
        />
        </label>
    );
};

export default InputField;
