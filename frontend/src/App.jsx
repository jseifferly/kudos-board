import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Navagation from './components/Navagation'
import BoardList from './components/BoardList'
import Footer from './components/Footer'
import { filterBoards, searchForSubstring} from './utils/utils.js'

import data from './data/data'

function App() {

  //Create a state to store the currently rendered boards
  const [renderedBoards, setRenderedBoards] = useState(data)

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
