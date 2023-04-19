import React, { useState } from "react";

function Search({searchListing}) {

  const [formData, setFormData] = useState('')

  console.log(formData)
  function handleSubmit(e) {
    e.preventDefault();
    searchListing(formData)
    setFormData('');
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={(e)=>setFormData(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
