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
    httpRequest(BASE_URL).then(boardList => {
      setRenderedBoards(boardList)}) 
  },[])

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
      <BoardList data={renderedBoards}/>
      <Footer />
    </>
  )
}

export default App
