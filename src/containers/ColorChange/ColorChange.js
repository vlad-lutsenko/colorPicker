import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Block from "../../components/Block";
import Inputs from "../../components/Inputs";

const ColorChange = () => {
  const [blockColor, setBlockColor] = useState({ red: 0, green: 0, blue: 0 });
  const [rgb, setRgb] = useState({ red: 0, green: 0, blue: 0 });

  const [block, setBlock] = useState("");
  const [controls, setControls] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setRgb({ ...rgb, [name]: Number(value) });
  };

  const controlsToggle = () => {
    setControls(!controls);
  };

  const onCancel = () => {
    const { red, green, blue } = blockColor;
    setRgb(blockColor);
    block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    controlsToggle();
  };

  const onSubmit = () => {
    setBlockColor(rgb);
    controlsToggle();
  };

  const history = useHistory();
  const onGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Block setBlock={setBlock} block={block} rgb={rgb} />
      {controls && (
        <Inputs
          rgb={rgb}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      )}
      {!controls && (
        <>
          <button className="button" onClick={controlsToggle}>
            change box color
          </button>
          <button className="button" onClick={onGoBack}>
            back to start page
          </button>
        </>
      )}
    </>
  );
};

export default ColorChange;
