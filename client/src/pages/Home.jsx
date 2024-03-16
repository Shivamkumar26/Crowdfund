import React from 'react'

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#13131a]' : 'bg-[#e5f8f9]'}`}>Home</div>
  )
}

export default Home