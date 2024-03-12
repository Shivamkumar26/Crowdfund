import React from 'react'

const Profile = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#09191b]' : 'bg-[#e5f8f9]'}`}>Profile</div>
  )
}

export default Profile