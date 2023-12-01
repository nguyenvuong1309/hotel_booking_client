



import React from 'react'

const Input = (
    {
        label = '',
        name = '',
        type = 'text',
        className = '',
        inputClassName = '',
        isRequired = true,
        placeholder = '',
        value = '',
        onChange = () => { },
        sendMessage
    }
) => {
    console.log("🚀 ~ file: Input.jsx:21 ~ value:", sendMessage)
    const handleKeyDown = (event) => {
        console.log("🚀 ~ file: DashBoard.jsx:109 ~ handleKeyDown ~ event:", event)
        if (event.key === 'Enter') {
            sendMessage()
        }
    }
    return (
        <div className={`${className}`}>
            <label for={name} className="block text-sm font-medium text-gray-800">{label}</label>
            <input type={type} id={name}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
                placeholder={placeholder} required={isRequired} value={value} onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Input