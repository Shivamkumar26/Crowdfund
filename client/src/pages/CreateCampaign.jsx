import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

// import { useStateContext } from '../context';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = ({ isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Enter valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className={`${isDarkMode ? 'bg-[#1c1c24]' : 'bg-[#f2fbfc]'} flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4`}>
      {/* {isLoading && <Loader />} */}
      <div className={`flex justify-center items-center p-[16px] sm:min-w-[380px] ${isDarkMode ? 'bg-[#3a3a43]' : 'bg-[#daf5e8]'} rounded-[10px]`}>
        <h1 className={`font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] ${isDarkMode ? 'text-white' : 'text-[#464f4a]'}`}>Enter Campaign Details</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Name *"
            placeholder="Magnus Carlsen"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="ex. College Eductaion"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
        </div>

        <FormField 
            labelName="Description *"
            placeholder="Write about the Campaign in detail."
            value={form.description}
            isTextArea
            handleChange={(e) => handleFormFieldChange('description', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="How much you want to raise? *"
            placeholder="0.30"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
          <FormField 
            labelName="Enter Deadline *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />
        </div>

        <FormField 
            labelName="Enter link of image about Campaign*"
            placeholder="Place image link of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit Details"
              styles="bg-[#1dc071]"
            />
          </div>
      </form>
    </div>
  )
}

export default CreateCampaign