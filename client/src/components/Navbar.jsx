import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// import { useStateContext } from '../context';
import { CustomButton } from './';
import { logo, menu, search, thirdweb, sun } from '../assets';

import { navlinks } from '../constants';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // const { connect, address } = useStateContext();

  const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, setToggleDrawer }) => (
    <div
      className={`w-[48px] h-[48px] rounded-[10px]
       ${isActive === name ? isDarkMode ? 'bg-[#2c2f32]' : 
       imgUrl === logo ? 'bg-[##ffead4]' : 'bg-[#daf5e8]' : ''} flex justify-center items-center ${!disabled ? 'cursor-pointer' : ''} ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name ? 'grayscale' : ''}`} />
      )}
    </div>
  );

  return (
    <div className={`flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 ${isDarkMode ? 'bg-[#13131a]' : 'bg-[#e5f8f9]'}`}>
      <div className={`lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px]  ${
    isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#f2fbfc]'
  } rounded-[100px]`}>

        <input type="text" placeholder="Search for campaigns" className={`flex w-full font-epilogue font-normal text-[14px] placeholder:text ${isDarkMode ? 'text-[#c3c8e8]' : 'text-[#4c548c]'} bg-transparent outline-none`} />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-1">
        <CustomButton 
          btnType="button"
          title={'New campaign'}
          styles={'bg-[#8c6dfd]'}
          handleClick={() => {
           navigate('create-campaign')
           setToggleDrawer(false);
          }}
        />

        <Link to="/profile">
          <div className={`w-[52px] h-[52px] rounded-full flex justify-center items-center cursor-pointer`}>
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>
      
        <div className="sm:hidden flex justify-between items-center relative">
        <div className={`w-[40px] h-[40px] rounded-[10px]  ${isDarkMode ? 'bg-[#2c2f32]' : 'bg-[#ffead4]'} flex justify-center items-center cursor-pointer`}>
            <img src={logo} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>

          <img 
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 ${isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#f2fbfc]'} z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && isDarkMode ? 'bg-[#3a3a43]' : 'bg-[]'}`}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggleDrawer(false);
                    navigate(link.link);
                  }}
                >
                  <img 
                    src={link.imgUrl}
                    alt={link.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4 justify-between">
            <CustomButton 
              btnType="button"
              title={'New campaign'}
              styles={ 'bg-[#8c6dfd]'}
              handleClick={() => {
               navigate('create-campaign')
               setToggleDrawer(false);
              }}
            />
            <Icon styles={`{transition: 'background-color 0.3s ease'} shadow-secondary`} imgUrl={sun} isActive={isActive} handleClick={() => {
              toggleDarkMode(!isDarkMode);
              setToggleDrawer(false);
            }}  
           />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;