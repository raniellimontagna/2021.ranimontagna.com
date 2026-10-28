import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="title">
        <h1 data-aos="fade-down">
          Entre <strong> em contato </strong>
        </h1>
      </div>
      <div className="row">
        <div className="form">
          <h2 data-aos="fade-right"> Envie uma mensagem:</h2>
          <form className="formulario">
            <input
              data-aos="fade"
              data-aos-anchor-placement="center-bottom"
              type="text"
              placeholder="Seu nome"
              id="name"
              className="name"
              required={true}
            />
            <input
              data-aos="fade"
              data-aos-anchor-placement="center-bottom"
              type="text"
              placeholder="Seu email"
              id="email"
              className="email"
              required={true}
            />
            <textarea
              data-aos="fade"
              data-aos-anchor-placement="center-bottom"
              rows="10"
              cols="30"
              placeholder="Sua mensagem"
              id="message"
              className="message"
              required="true"
            />

            <button
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              type="submit"
              className="submit"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="contactDetails">
          <h2 data-aos="fade-right" data-aos-anchor-placement="center-bottom">
            {" "}
            Meus detalhes de contato:
          </h2>
          <h6 data-aos="fade-down" data-aos-anchor-placement="center-bottom">
            EMAIL
          </h6>
          <p data-aos="fade-down" data-aos-anchor-placement="center-bottom">
            raniellimontagna@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
