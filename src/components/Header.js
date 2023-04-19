import React from "react";
import Search from "./Search";

function Header({ searchListing, sortListing, sorted }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListing={searchListing}/>
      <button onClick={sortListing}>{ sorted ? "Unsort" : "Sort by location" }</button>
    </header>
  );
}

export default Header;
