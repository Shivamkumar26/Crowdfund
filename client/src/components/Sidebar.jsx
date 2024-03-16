import React,  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Sidebar = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
        <div
          className={`w-[48px] h-[48px] rounded-[10px]
           ${isActive === name ? isDarkMode ? 'bg-[#2c2f32]' : 
           imgUrl === logo ? 'bg-[#ffead4]' : 'bg-[#daf5e8]' : ''} flex justify-center items-center ${!disabled ? 'cursor-pointer' : ''} ${styles}`}
          onClick={handleClick}
        >
          {!isActive ? (
            <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
          ) : (
            <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name ? 'grayscale' : ''}`} />
          )}
        </div>
      );

  const containerClasses = `flex-1 flex flex-col justify-between items-center ${
    isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#f2fbfc]'
  } rounded-[20px] w-[76px] py-4 mt-12`;

  return (
    <div className={`flex justify-between items-center flex-col sticky top-5 h-[93vh] ${isDarkMode ? 'dark' : 'light'}`}>
      <Link to="/">
        <Icon styles={`w-[52px] h-[52px] ${
    isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#ffead4]'
  }`} imgUrl={logo} />
      </Link>
      <div className={containerClasses}>
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles={`${
    isDarkMode ? 'bg-[#2c2f32]' : 'bg-[]'
  } {transition: 'background-color 0.3s ease'} shadow-secondary`} imgUrl={sun} isActive={isActive} handleClick={toggleDarkMode} />

      </div>
    </div>
  );
};

export default Sidebar;