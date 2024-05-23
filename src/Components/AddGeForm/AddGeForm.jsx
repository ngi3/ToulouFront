import React from "react";
// import "./AddGeForm.css";
import Btn from "../Btn/Btn";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
//import { AddForm } from "../AddForm/AddForm";
import { Outlet } from "react-router-dom";

export const AddGeForm = () => {
  return (
    <div className="flex  min-h-screen w-full ">
      <Menu />

      <div className="pl-14 w-full">
        <div className="bg-orange-400 flex-1 h-16 sticky top-0 w-full">
          <Header />
        </div>
        <div className=" h-screen">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};
export default AddGeForm;
