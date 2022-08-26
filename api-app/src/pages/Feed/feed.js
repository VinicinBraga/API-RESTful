import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";
import "./feed.css";
import { Link } from "react-router-dom";

function Feed() {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Curso consumindo Api</h2>
              <img src={More} alt="circle" />
            </header>
            <div className="line"></div>
            <p> Nesse Curso voce aprenderá a consumir uma api</p>
            <div className="btns">
              <div className="btn-edit">
                <Link to="/edit">
                  <button>Edit</button>
                </Link>
              </div>
              <div className="btn-readmore">
                <Link to="/details">
                  <button>Details</button>
                </Link>
              </div>
              <div className="btn-delete">
                <Link to="/edit"></Link>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
