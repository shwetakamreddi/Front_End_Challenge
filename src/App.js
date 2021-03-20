import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar'
import CardList from './CardList'
import Nomination from "./Nomination"
export default function App() {
  
  return (
    <div className="App">
      <div className="container">
      <div className="d-flex flex-column align-center text-center m-5">
        <h2 className="text-center">Movie Nomination Blog</h2>
        <SearchBar/>
        <Nomination/>
        <CardList/>
      </div>
      </div>
    </div>
  )
}
