import React, { useState } from "react";
import "../styles/component.css";
import clip from "../assets/images/clip.png";

const Input = (props) => {
  const [link, setLink] = useState("");

  const { handleSubmit } = props;

  const anjay = () => {
    handleSubmit(link); 
  };

  const changes = (e) => {
    setLink(e.target.value); 
  };

  const paste = async () => {
    await navigator.clipboard.readText().then((text) => {
      setLink(text); 
    }).catch(() => {
      setLink(""); 
    });
  };

  return (
    <>
      <div className="input">
        <div className="paste">
          <img src={clip} onClick={paste} alt="paste" />
        </div>
        <input type="text" value={link} onChange={changes} />
        <div className="unduh" onClick={anjay}>
          Unduh
        </div>
      </div>
    </>
  );
};

export default Input;
