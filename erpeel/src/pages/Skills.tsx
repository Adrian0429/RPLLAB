import React from 'react'
import Image from 'next/image';
import htmlpng from 'public/assets/html.png'
import csspng from 'public/assets/css.png'
import jspng from 'public/assets/javascript.png'
import tailwindpng from 'public/assets/tailwind.png'
import githubpng from 'public/assets/github1.png'

const Skills = () => {
  return (
    
    <div className='py-16'>
      <div className='mx-auto max-w-6xl px-8 md:px-6'> 

            <div className='mb-10 text-center'>
              <span className='font-medium text-blue-600'>MySqills</span>
            </div>

            <div className=''>
              <div className='group-[] flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500'>
                <Image src={htmlpng} width={45} height={45} alt="/"/>
                <h4 className='mt-3 mb-1 font-semibold text-slate-600 duration-200 group-hover:text-whit'>Html</h4>
              </div>
              <div className='group-[] flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500'>
                <Image alt=''src={csspng} ></Image>
                <h4 className='mt-3 mb-1 font-semibold text-slate-600 duration-200 group-hover:text-whit'>Html</h4>
              </div>
              <div className='group-[] flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500'>
                <Image alt='' src={githubpng} width={45} height={45}></Image>
                <h4 className='mt-3 mb-1 font-semibold text-slate-600 duration-200 group-hover:text-whit'>Html</h4>
              </div>
              <div className='group-[] flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500'>
                <Image alt='' src={tailwindpng} width={45} height={45}></Image>
                <h4 className='mt-3 mb-1 font-semibold text-slate-600 duration-200 group-hover:text-whit'>Html</h4>
              </div>


            </div>
      </div>

    </div>




  );
};

export default Skills;