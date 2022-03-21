import React from "react";
import Button from "./Button";

const Form = ({
  key,
  title,
  classBtn,
  onClick,
  textCompleted,
  colorCompleted,
}) => {
  return (
    <>
      <div className="row" key={key}>
        <div className={classBtn}>{title}</div>
        <div className="action">
          <Button
            color={colorCompleted}
            text={textCompleted}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
