import React from "react";
import Sholay from "../../image/ddlj.jpg";
import "./movie.css";

const Movie = () => {
  const movieDetail = [
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
    {
      img: Sholay,
      name: "Sholay",
      rating: 4,
      rel_date: "4 - Oct - 1999",
    },
  ];

  return (
    <div className="card">
      <div className="card_body">
        <h1>List of Movies</h1>
        <div className="main_card">
          {movieDetail.map((product) => (
            <div className="main_card-single">
              <div className="test-div1">
                <img src={product.img} alt="" />
              </div>
              <div className="test-div2">
                <p>
                  Movie Name:{product.name}
                  <br />
                  <span>Rating:{product.rating} Star</span> <br />
                  <h6>Released Date:{product.rel_date} </h6>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
