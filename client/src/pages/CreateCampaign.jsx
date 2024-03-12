import React from 'react'

const CreateCampaign = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#09191b]' : 'bg-[#e5f8f9]'}`}>CreateCampaign</div>
  )
}

export default CreateCampaign