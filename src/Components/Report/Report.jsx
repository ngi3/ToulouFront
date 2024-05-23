import React from 'react'

export const Report = ({titre, soustitre1, soustitre2, soustitre3, desc, desc2, desc3}) => {
  return (
    <div className='flex flex-col mt-9'>
      <div className='shadow border-t-4 border-orange-400 rounded-2xl w-96 m-8 px-6 ' >
        <h3 className='text-center border-b-2 border-[#6D3100] text-[#6D3100] py-2'>{titre}</h3>

        <div className='flex text-5xl'>
        <div className ='flex flex-col justify-center items-center py-4 mx-6'>
          <h1 className='px-6 font-medium'>{soustitre1}</h1>
          <p className='text-xs' >{desc}</p>
        </div>

        <div className ='flex flex-col justify-center items-center'>
        <h1 className='px-6 font-medium text-[#ED8B3B]'>{soustitre2}</h1>
        <p className='text-xs'>{desc2}</p>
        </div>
       
        <div className ='flex flex-col justify-center items-center'>
        <h1 className='px-6 font-medium text-[#C4C4C4]'>{soustitre3}</h1>
        <p className='text-xs'>{desc3}</p>
        </div>
        </div>
        
      </div>

     
    </div>
  )
}
export default Report;