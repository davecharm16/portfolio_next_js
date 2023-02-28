import React from 'react'
import {RxExternalLink} from 'react-icons/rx';

export const ProjectItem = ({projectTitle, description, image, gitLink, teckStack}) => {
  return (
    <div className='flex flex-col items-center h-[600px] w-[95%] rounded-lg justify-center shadow-xl md:flex-row'>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-757cf.appspot.com/o/deviceframes%20(5).png?alt=media&token=3e28833b-e965-41ec-8cb2-d1030f73477c' alt="Project Picture" className='w-full h-full
            object-contain'/>
        </div>
        <div className='text-white p-3 flex flex-col w-full h-full justify-center items-start md:w-1/2 '>
            <h2 className='text-2xl font-bold text-white mb-3'>Gear Up</h2>
            <p className='w-[95%] mb-5'>Gear-up is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.</p>
            <div className='w-full mb-10'>
                <div className='inline-block mr-3 text-[#121212] font-bold bg-white rounded-sm px-7 py-2 uppercase'>HTML</div>
                <div className='inline-block mr-3 text-[#121212] font-bold bg-white rounded-sm px-7 py-2 uppercase'>CSS</div>
                <div className='inline-block mr-3 text-[#121212] font-bold bg-white rounded-sm px-7 py-2 uppercase'>JS</div>
            </div>
            <button className='flex flex-row items-center justify-between bg-[#F6E71D] text-[#121212] rounded-sm px-7 py-2 shadow-xl font-bold'>
                <span className='mr-2'> VIEW ON GIT</span>
                <RxExternalLink className='text-[#121212] w-[20px] h-[20px]'/>
            </button>
        </div>
    </div>
  )
}

