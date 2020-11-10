import React, { useEffect } from "react";

const Block = ({ setBlock }) => {
  useEffect(() => {
    const elToFind = document.querySelector("#block");
    setBlock(elToFind);
  }, []);

  return <div id="block"></div>;
};

export default Block;
