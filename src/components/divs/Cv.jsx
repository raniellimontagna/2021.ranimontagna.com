import React from "react";
import "./Cv.css";


function Cv() {
  return (
    <div className="cv">
      <h1 data-aos="fade-down">
        Eu prezo por sempre estar em constante desenvolvimento, então sempre
        estou estudando para melhorar a mim mesmo.
      </h1>
      <div>
        <p data-aos="fade-up">
          Como disse anteriormente tenho conhecimento em diversas áreas da
          tecnologia, nesse gráfico abaixo coloquei minha opinião sobre meus
          conhecimentos.
        </p>
      </div>
      <div className="progressBars">
        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          ReactJS
        </h5>

        <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="progress1">
          <div className="progress-value1" style={{ width: "70%" }}>
            <span>70%</span>
          </div>
        </div>

        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Formatação
        </h5>

        <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="progress1">
          <div className="progress-value1" style={{ width: "80%" }}>
            <span>80%</span>
          </div>
        </div>

        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Photoshop
        </h5>

        <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="progress1">
          <div className="progress-value1" style={{ width: "50%" }}>
            <span>50%</span>
          </div>
        </div>

        <h5 data-aos="fade" data-aos-anchor-placement="top-bottom">
          Design de Interiores
        </h5>

        <div data-aos="fade" data-aos-anchor-placement="top-bottom" className="progress1">
          <div className="progress-value1" style={{ width: "100%" }}>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
