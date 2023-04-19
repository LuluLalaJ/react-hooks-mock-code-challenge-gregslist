import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const listingUrl = "http://localhost:6001/listings/"
  const [listings, setListings] = useState([])
  const [fav, setFav] = useState([])
  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState(false)


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


  function sortListing(){
    setSorted(sorted => !sorted)
  }
  const displayedListings = listings
  .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  .sort((listing1, listing2) => {
    if (sorted) {
      return listing1.location.toLowerCase().localeCompare(listing2.location.toLowerCase())
    }
  })

  return (
    <div className="app">
      <Header searchListing={searchListing} sortListing={sortListing} sorted={sorted}/>
      <ListingsContainer listings={displayedListings} changeFav={changeFav} fav={fav} removeListing={removeListing}/>
    </div>
  );
}

export default App;
