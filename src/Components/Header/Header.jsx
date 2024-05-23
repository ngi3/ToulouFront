import React from 'react'
// import './Header.css'
import widget from "../Assets/Widget_light.svg"

export const Header = ({name='Paramètre', desc='Ajout de groupe électrogène'}) => {
  return (
    <div className="h-16 px-4 flex justify-end items-center me-[200px] space-x-4 text-white ">
            <div className='py-2 h-full'>
            <div className='border-r-2 border-white h-full'></div>
            </div>
            <img src={widget} alt="" />
            <h4>{name}</h4>
            <h3 className='bg-white text-orange-400 p-1 rounded-md px-2'>{desc}</h3>
    </div>
  )
}
export default Header;

{/* <Header name={''} desc={}/> */}