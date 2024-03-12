// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// import { Sidebar, Navbar } from './components';
// import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

// const App = () => {
//   return (
//     <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
//       <div className="sm:flex hidden mr-10 relative">
//         <Sidebar />
//       </div>

//       <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/create-campaign" element={<CreateCampaign />} />
//           <Route path="/campaign-details/:id" element={<CampaignDetails />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App;

// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // <div className={`relative sm:-8 p-4 ${isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#2b4450]'} min-h-screen flex flex-row`}>
    <div className={`relative sm:-8 p-4 ${isDarkMode ? 'bg-[#09191b]' : 'bg-[#e5f8f9]'} min-h-screen flex flex-row`}>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>

        <Routes>
          <Route path="/" element={<Home  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/profile" element={<Profile  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/create-campaign" element={<CreateCampaign  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
