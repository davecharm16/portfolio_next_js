import React, {useState, useEffect}from 'react'
import {RxExternalLink} from 'react-icons/rx';

export const ProjectItem = ({projects}) => {

//   console.log(project);
  return (
    <div className='flex flex-col items-center h-[600px] w-[95%] rounded-lg justify-center shadow-xl md:flex-row'>
        <div className='flex w-full h-full justify-center items-center md:w-1/2'>
            <img src={projects?.project_image}/>
        </div>
        <div className='text-white p-3 flex flex-col w-full h-full justify-center items-start md:w-1/2 '>
            <h2 className='text-2xl font-bold text-white mb-3'>{projects?.project_name}</h2>
            <p className='w-[95%] mb-5'> {projects?.project_description} </p>
            <div className='w-full mb-10 flex flex-row flex-wrap'>
                { projects?.tech_stack.map((val, id) => {
                        return(
                            <div className='m-[5px] text-[#121212] font-bold bg-white rounded-sm px-7 py-2 uppercase' key={id}>{val}</div>
                        )
                    }) 
                }
            </div>
            <a href={projects?.project_link} className='flex flex-row items-center justify-between bg-[#F6E71D] text-[#121212] rounded-sm px-7 py-2 shadow-xl font-bold' target='_blank'>
                <span className='mr-2'> VIEW ON GIT</span>
                <RxExternalLink className='text-[#121212] w-[20px] h-[20px]'/>
            </a>
        </div>
    </div>
  )
}

