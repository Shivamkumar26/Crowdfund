import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange, isDarkMode, toggleDarkMode }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className={`font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]`}>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] ${isDarkMode ? 'border-[#3a3a43]' : 'border-[#abc3c4]'} bg-transparent font-epilogue ${isDarkMode ? 'text-white' : 'text-dark'} text-[14px] ${isDarkMode ? 'placeholder:text-[#4b5264]' : 'placeholder:text-[#8c8d9c]'} rounded-[10px] sm:min-w-[300px]`}
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] ${isDarkMode ? 'border-[#3a3a43]' : 'border-[#abc3c4]'} bg-transparent font-epilogue  ${isDarkMode ? 'text-white' : 'text-dark'} text-[14px] ${isDarkMode ? 'placeholder:text-[#4b5264]' : 'placeholder:text-[#8c8d9c]'} rounded-[10px] sm:min-w-[300px]`}
        />
      )}
    </label>
  )
}

export default FormField