import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { CarouselProject } from './CarouselProject'
import { Search } from './Search'

export const Projects = () => {
    return (
        <section className='min-h-screen min-w-full px-10 bg-[#121212] relative ProjectBackground md:pt-10'>
            <div>
                <h1 className='text-[#F6E71D] text-center font-medium text-6xl tracking-widest pt-10 pb-7 font-arial ProjectHead'>
                    Projects
                </h1>
                <div className='w-20 h-2 bg-white rounded-md mx-auto Bar'></div>
            </div>
            <div>
                <h4 className='text-center mt-5 text-white font-roboto'>Here you will find some of the personal projects that I created within my years of studying in the university</h4>
            </div>
            <Search/>
            <div className='block min-h-[calc(100vh-200px)] h-[750px] mt-2 md:h-[650px]'>
                <CarouselProject/>
            </div>
        </section>
    )
}
