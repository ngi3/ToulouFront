import React from "react";
import Btn from "../Btn/Btn";
export const AddForm = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-1/3 flex flex-col space-y-5 mt-9 ">
        <div className="flex flex-col ">
          <label className="text-gray-600 font-thin" htmlFor="">
            Marque
          </label>
          <select className="p-2 ring-1 ring-gray-500 rounded-lg" name="" id="">
            <option value=""></option>
          </select>
        </div>

        <label className="text-gray-600 font-thin" htmlFor="">
          Modèle
        </label>
        <select className="p-2 ring-1 ring-gray-500 rounded-lg" name="" id="">
          <option value=""></option>
        </select>

        <label className="text-gray-600 font-thin" htmlFor="">
          Identifiant Toulou
        </label>
        <input className="p-2 ring-1 ring-gray-500 rounded-lg" type="text" />

        <label className="text-gray-600 font-thin" htmlFor="">
          Numéro de série
        </label>
        <input className="p-2 ring-1 ring-gray-500 rounded-lg" type="text" />

        <label className="text-gray-600 font-thin" htmlFor="">
          Site technique
        </label>
        <select className="p-2 ring-1 ring-gray-500 rounded-lg" name="" id="">
          <option value=""></option>
        </select>
        <div className="text-center">
          <Btn text="Enregistrer le groupe" backgroundColor='#ED8B3B'color='fff'/>
        </div>
      </form>
    </div>
  );
};
export default AddForm;
