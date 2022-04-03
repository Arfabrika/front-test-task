import React from 'react';
import './MyButton.css'
const MyButton = ({children, ...props}) => {
  return (
    <div>
          <button
            className={props.type == 1 ? "myBtn1" : "myBtn2"}
            {...props}> {children} </button>
    </div>
  );
};

export default MyButton;