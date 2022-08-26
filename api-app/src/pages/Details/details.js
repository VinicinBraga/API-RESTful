import React from "react";
import Header from "../../components/Header/Header";
import More from "../../images/more.svg";

function Details() {
  return (
    <div>
      <Header />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Curso consumindo Api</h2>
              <img src={More} alt="circle" />
            </header>
            <div className="line"></div>
            <p>
              {" "}
              Nesse Curso voce aprenderá a consumir uma api com react. Nesse
              Curso voce aprenderá a consumir uma api com react. Nesse Curso
              voce aprenderá a consumir uma api com react. Nesse Curso voce
              aprenderá a consumir uma api com react. Nesse Curso voce aprenderá
              a consumir uma api com react.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Details;
