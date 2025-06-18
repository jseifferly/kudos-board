import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Navagation from './components/Navagation'
import BoardList from './components/BoardList'
import Footer from './components/Footer'
import { filterBoards, searchForSubstring, httpRequest} from './utils/utils.js'

import data from './data/data'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {

  const [renderedBoards, setRenderedBoards] = useState([])

  useEffect(() => {
    httpRequest(BASE_URL, 'GET').then(boardList => {
      setRenderedBoards(boardList)}) 
  },[])

  const handleDelete = id => {
    setRenderedBoards(renderedBoards.filter(element => element.id !== id));
    const BOARD_URL = new URL(`boards/${id}`,BASE_URL)
    httpRequest(BOARD_URL,'DELETE')
  }

  const filterData = (type) => {
    const filteredData = filterBoards(data,type);
    setRenderedBoards(filteredData);
  }

  const searchData = (searchTerm) => {
    const searchedData = searchForSubstring(data, searchTerm);
    setRenderedBoards(searchedData);
  }

  return (
    <>
      <Header />
      <Navagation filter={filterData} search={searchData}/>
      <BoardList data={renderedBoards} onDelete={handleDelete}/>
      <Footer />
    </>
  )
}

export default App
