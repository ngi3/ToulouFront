import React from 'react';
import { BiColor } from 'react-icons/bi';
// import './Btn.css';


export const Btn = ({text, taille, border = "", backgroundColor = "transparent", color="grey"}) => {
  const style = {
    button : {
      border: border,
      backgroundColor: backgroundColor,
      color: color,
      padding: "7px 35px"
    }
  }
  return (
    <div>
        <button  className='bg-orange-400 text-white m-4 px-4 py-2 rounded-full ' style={style.button}> {text} </button>
        
    </div>
  )
}

export default Btn;