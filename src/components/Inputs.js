import React from "react";

const Inputs = ({ rgb, onChange, onSubmit, onCancel }) => {
  return (
    <>
      <div className="inputs">
        <label>
          <p>{rgb.red}</p>
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.red}
            name="red"
            onChange={onChange}
          />
        </label>
        <label>
          <p>{rgb.green}</p>
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.green}
            name="green"
            onChange={onChange}
          />
        </label>
        <label>
          <p>{rgb.black}</p>
          <input
            type="range"
            min="0"
            max="255"
            value={rgb.black}
            name="black"
            onChange={onChange}
          />
        </label>{" "}
      </div>
      <div>
        <button className="button" onClick={onCancel}>
          cancel
        </button>
        <button className="button" onClick={onSubmit}>
          submit
        </button>
      </div>
    </>
  );
};

export default Inputs;
