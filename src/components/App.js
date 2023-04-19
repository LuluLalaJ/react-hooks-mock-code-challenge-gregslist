import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const listingUrl = "http://localhost:6001/listings/"
  const [listings, setListings] = useState([])
  const [fav, setFav] = useState([])

  useEffect(()=>{
    fetch(listingUrl)
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

  function changeFav(id) {
    if (!fav.includes(id)) {
      setFav([...fav, id])
    } else {
      const removeFromFav = fav.filter(ele => ele !== id)
      setFav(removeFromFav)
    }
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} changeFav={changeFav} fav={fav}/>
    </div>
  );
}

export default App;
