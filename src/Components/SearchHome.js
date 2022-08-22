import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function SearchHome() {
  return (
    <div className='items-center flex flex-col justify-center h-full w-full bg-gradient-to-r from-[#161920] via-[#3a4355] to-[#303646] space-y-5'>
      <span className='text-5xl font-bold text-cyan-50'>BIG LOGO</span>
      <div className='flex w-full items-center justify-center'>
        <SearchBar />
      </div>
    </div>
  )
}

function SearchBar({ props }) {
  let navigate = useNavigate();

  const [query, setQuery] = useState(props?.query);

  function search(event) {
    event.preventDefault();

    navigate(`/search/${query}`);
  }

  return (
    <>
      <form onSubmit={search} className={`flex w-full space-x-3 ${props?.searchresults ? "" : "justify-center"}`}>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-primary">Search</button>
      </form>
    </>
  )
}

export { SearchHome, SearchBar }