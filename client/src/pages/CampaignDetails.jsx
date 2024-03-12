import React from 'react'

const CampaignDetails = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#09191b]' : 'bg-[#e5f8f9]'}`}>CampaignDetails</div>
  )
}

export default CampaignDetails