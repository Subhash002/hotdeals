import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={item.url_image} alt={item.title} />
      </div>
      <div className="text-container">
        <h5>{item.title.slice(0, 20)}</h5>
        <p>
          Price drop from {item.price_strikethrough} to {item.price}
        </p>
        <p>Rating : {item.rating}</p>
      </div>
      <div className="info-container">
        <div className="circle">
          {(
            ((item.price_strikethrough - item.price) /
              item.price_strikethrough) *
            100
          ).toFixed(2)}
          %
        </div>
        <a
          href={`https://www.amazon.in/${item.url}`}
          target="_blank"
          rel="noreferrer"
        >
          Go!
        </a>
      </div>
    </div>
  );
};

export default Card;
