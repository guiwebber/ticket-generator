import React, { useState } from "react";
import "./Form.css";
import Ticket from "../ticket/Ticket";
import logo from "../../images/logo-full.svg";
import imgBtn from "../../images/icon-upload.svg";
import info from "../../images/icon-info.svg";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(""); // Estado para armazenar o nome do arquivo
  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleGithub = (e) => setGithub(e.target.value);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setFileName(file.name); // Armazena o nome do arquivo selecionado
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="containerForm">
      <div className="containerLogo">
        <img src={logo} alt="Logo" />
      </div>

      {!submitted ? (
        <>
          <div className="text">
            <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
          </div>

          <div className="containerUpload">
            <div className="subContainerUpload">
              <p className="label">Upload Avatar</p>
              <div className="divUpload">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="btnUpload">
                  <img src={imgBtn} alt="Upload Icon" />
                </label>
                <p>Drag and drop or click to upload</p>
                {fileName && <p className="fileName">{fileName}</p>}
              </div>
              <div className="divInfo">
                <img className="iconInfo" src={info} alt="Info Icon" />
                <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
              </div>
            </div>
          </div>

          <div className="divForm">
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required onChange={handleName} />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="example@email.com"
                onChange={handleEmail}
              />

              <label htmlFor="github">GitHub Username</label>
              <input
                type="text"
                id="github"
                required
                placeholder="@yourusername"
                onChange={handleGithub}
              />

              <button type="submit">Generate My Ticket</button>
            </form>
          </div>
        </>
      ) : (
        <Ticket name={name} email={email} github={github} image={image} />
      )}
    </div>
  );
}

export default Form;
