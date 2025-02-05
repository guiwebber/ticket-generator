import React from "react";
import {useState} from "react";
import "./Form.css";
import logo from "../../images/logo-full.svg";
import imgBtn from "../../images/icon-upload.svg";
import info from "../../images/icon-info.svg";
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleGithub = (e) => {
    setGithub(e.target.value)
  }

  return (
    <div className="containerForm">
      <div className="containerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="text">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest codding conference.</p>
      </div>
      <div className="containerUpload">
        <div className="subContainerUpload">
          <p className="label">Upload Avatar</p>
          <div className="divUpload">
            <button>
              <img src={imgBtn} alt="" />
            </button>
            <p>Drag and drop or click to upload</p>
          </div>
          <div className="divInfo">
            <img className="iconInfo" src={info} alt="" />
            <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
          </div>
        </div>
      </div>
      <div className="divForm">
        <form className="form" action="submit">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" onChange={handleName} />
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="example@email.com" id="email" onChange={handleEmail} />
          <label htmlFor="github">Github Username</label>
          <input type="text" id="github" placeholder="@yourusername" onChange={handleGithub}/>
          <button>Generate My Ticket</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
