import React from 'react'

const CampaignDetails = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#13131a]' : 'bg-[#e5f8f9]'}`}>CampaignDetails</div>
  )
}

export default CampaignDetails