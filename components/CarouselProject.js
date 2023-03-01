import React, {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectItem } from './ProjectItem';
import { firebaseConfig } from '@/utils/firebase';
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';



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
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const proj = [];
      querySnapshot.forEach((doc) => {
          // console.log(doc.data())
          proj.push(doc.data());
      });
      setProjects(proj);
      // console.log("Current cities in CA: ", cities.join(", "));
    });

    return unsubscribe;
  }, [])



  return (
    <Carousel responsive={responsive} className= 'p-5 rounded-xl max-w-[1400px] mx-auto'>
      {
        projects.map((val, id)=>{
          return(
            <ProjectItem projects={val} key={id}/>
          )
        })
        
      }
    </Carousel>
  )
}
  

