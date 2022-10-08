import React, { useState } from "react";
import "./styles.css";
// const trash = require("../../Media/trash.png");
const grass = require("../../Media/grass.png");
const glass = require("../../Media/glass.png");
const paper = require("../../Media/paper.png");
const metal = require("../../Media/metal.png");
const plastic = require("../../Media/plastic.png");

export default function Index() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
    // console.log("clicked!");
  };

  return (
    <>
      <div className="info-section">
        <ul className="small-block-grid-4">
          <li style={{ listStyle: "none" }}>
            <img
              onClick={openModal}
              className="bins"
              width={130}
              src={glass}
              alt="trash-can"
            />
            {modal ? (
              <iframe
                className="vid-frame"
                loading="lazy"
                width="700"
                height="300"
                src="https://www.youtube.com/embed/vhpc0UULjDU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            ) : null}
          </li>
          <li style={{ listStyle: "none" }}>
            <img
              onClick={openModal}
              className="bins"
              width={133}
              src={paper}
              alt="trash-can"
            />
          </li>
          <li style={{ listStyle: "none" }}>
            <img
              onClick={openModal}
              className="bins"
              width={130}
              src={metal}
              alt="trash-can"
            />
          </li>
          <li style={{ listStyle: "none" }}>
            <img
              onClick={openModal}
              className="bins"
              width={125}
              src={plastic}
              alt="trash-can"
            />
          </li>
        </ul>
        <img className="grass" src={grass} alt="illustrated grass" />
      </div>
    </>
  );
}
