import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const listingUrl = "http://localhost:6001/listings/"
  const [listings, setListings] = useState([])
  const [fav, setFav] = useState([])
  const [search, setSearch] = useState('')

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

  function removeListing(id) {
    fetch(listingUrl+id, {method: "DELETE"})
    .then(r => r.json())
    .then(date => setListings(listings.filter(listing => listing.id !== id)))
  }

  function searchListing(item){
    setSearch(item)
  }

  const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()) )

  return (
    <div className="app">
      <Header searchListing={searchListing}/>
      <ListingsContainer listings={displayedListings} changeFav={changeFav} fav={fav} removeListing={removeListing}/>
    </div>
  );
}

export default App;
