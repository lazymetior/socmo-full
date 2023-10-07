import React from 'react'

export const SearchBar = () => {
  return (
    <form className="d-flex" role="search">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-light lg-mx-2" type="submit">
      Search
    </button>
  </form>
  )
}
