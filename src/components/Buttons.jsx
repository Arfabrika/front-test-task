import React from 'react';
import MyButton from "./MyButton/MyButton";

const Buttons = ({curPage, setPage}) => {
  return (
    <div className="buttons_module">
      <MyButton onClick={() => setPage(curPage - 1)} type ={0}></MyButton>
      <MyButton onClick={() => setPage(curPage + 1)} type ={1}></MyButton>
    </div>
  );
};

export default Buttons;