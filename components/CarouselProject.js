import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectItem } from './ProjectItem';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  
export const CarouselProject = () => {
  return (
    <Carousel responsive={responsive} className= 'h-[450px] mt-10 p-5 rounded-xl max-w-[1000px] mx-auto'>
      <ProjectItem/>
      <ProjectItem/>
    </Carousel>
  )
}
  

