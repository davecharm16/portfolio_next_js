import React from 'react';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export const Component = () => {
  return (
    <>
      <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti numquam eveniet delectus sit mollitia iusto, alias perspiciatis cum reprehenderit beatae aperiam. 
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image src={design} width = {100} height = {100} className= 'inline-block'/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4 className='py-4 text-teal-600'> Design Tools I used</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image src={code} width = {100} height = {100} className= 'inline-block'/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4 className='py-4 text-teal-600'> Design Tools I used</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10'>
              <Image src={consulting} width = {100} height = {100} className= 'inline-block'/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4 className='py-4 text-teal-600'> Design Tools I used</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>
              Portfolio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti numquam eveniet delectus sit mollitia iusto, alias perspiciatis cum reprehenderit beatae aperiam. 
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
    </>
  )
}
