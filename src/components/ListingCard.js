import React from "react";

function ListingCard({listing, changeFav, fav}) {
  const {id, description, image="https://via.placeholder.com/300x300", location} = listing

  const isFav = fav.includes(id)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={(e)=>changeFav(id)}>★</button>
        ) : (
            <button className="emoji-button favorite" onClick={(e) => changeFav(id)} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
