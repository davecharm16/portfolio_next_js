import React from 'react'

export const ProjectItem = ({projectTitle, description, image, gitLink, teckStack}) => {
  return (
    <div className='flex flex-col items-center h-[450px] w-[95%] bg-[#ffffff] rounded-lg justify-center shadow-xl md:flex-row'>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            {/* <img src={image} alt="" /> */}
            test
        </div>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            test
        </div>
    </div>
  )
}

