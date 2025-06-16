import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Navagation from './components/Navagation'
import BoardList from './components/BoardList'
import Footer from './components/Footer'
import filterBoards from './utils/utils'

import data from './data/data'

function App() {

  const [renderedBoard, setRenderedBoards] = useState([data])

  return (
    <>
      <Header />
      <Navagation />
      <BoardList data={data}/>
      <Footer />
    </>
  )
}

export default App
