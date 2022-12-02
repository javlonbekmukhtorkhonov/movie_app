import React from "react";

const Main = () => {
  return (
    <>
      <div className="header">
        <nav>
          <p className="movie-icon"> THE MOVIES </p>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Top rated</a>
            </li>
            <li>
              <a href="#">Upcoming</a>
            </li>
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Movie, person, movie theatres"
              className="inputText"
            ></input>
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Main;
