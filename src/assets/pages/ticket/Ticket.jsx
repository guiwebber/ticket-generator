import React from "react";
import {useState, useEffect} from "react";
import "./Ticket.css";
import imgLogo from "../../images/logo-full.svg";
import githubLogo from "../../images/icon-github.svg";
function Ticket({ name, email, github, image }) {
    const [ticketNumber, setTicketNumber] = useState("");

    useEffect(() => {
      const randomNumber = Math.floor(10000 + Math.random() * 90000); 
      setTicketNumber(`#${randomNumber}`);
    }, []);
  return (
    <div className="ticket">
      <div className="divCongrats">
        <h1>
          Congrats, <span className="spanName">{name}</span>! <br /> Your ticket is ready.
        </h1>
        <p className="emailSend">
          We've emailed your ticket to <span className="spanEmail">{email}</span> and will send updates in the run
          up to the event.
        </p>
      </div>
      <div className="ticket-bg">
        <div className="contentTicket">
          <div className="divTop">
            <img src={imgLogo} alt="" />
            <p className="day">Jan 31, 2025 / Austin, TX</p>
          </div>

          <div className="divBottom">
            <div>
              {image && (
                <img src={image} alt="Avatar" className="ticket-avatar" />
              )}
            </div>
            <div className="divName">
              <h2>{name}</h2>
              <div className="divGithub">
                <img src={githubLogo} alt="" />
                <p>@{github}</p>
              </div>
            </div>
          </div>
        </div>
       <div className="divAside">
        <p>#{ticketNumber}</p>
      </div> 
      </div>
    </div>
  );
}

export default Ticket;

