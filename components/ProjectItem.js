import React from 'react'

export const ProjectItem = ({projectTitle, description, image, gitLink, teckStack}) => {
  return (
    <div className='flex flex-col items-center h-[450px] w-[95%] bg-[#ffffff] rounded-lg justify-center shadow-xl md:flex-row'>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-757cf.appspot.com/o/deviceframes%20(5).png?alt=media&token=3e28833b-e965-41ec-8cb2-d1030f73477c' alt="Project Picture" />
            test
        </div>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            test
        </div>
    </div>
  )
}

