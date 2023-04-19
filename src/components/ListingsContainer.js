import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, changeFav, fav}) {

  const renderListings = listings.map(listing => <ListingCard
    key={listing.id}
    listing={listing}
    changeFav={changeFav}
    fav={fav}
    />)
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
