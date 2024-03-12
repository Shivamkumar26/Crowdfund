import React from 'react'

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#09191b]' : 'bg-[#e5f8f9]'}`}>Home</div>
  )
}

export default Home