import React, { useEffect } from "react";

const Block = ({ setBlock, block, rgb }) => {
  useEffect(() => {
    const elToFind = document.querySelector("#block");
    setBlock(elToFind);
  }, []);

  const { red, green, blue } = rgb;

  if (block) {
    block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  return <div id="block"></div>;
};

export default Block;
