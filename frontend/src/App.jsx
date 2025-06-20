import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Navagation from './components/Navagation.jsx'
import BoardList from './components/BoardList.jsx'
import Footer from './components/Footer.jsx'
import { filterBoards, searchForSubstring, httpRequest} from './utils/utils.js'
import { darkModeContext } from './components/DarkModeProvider.jsx'
import { useContext } from 'react'

const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {

  const [renderedBoards, setRenderedBoards] = useState([])
  const darkMode = useContext(darkModeContext)

  useEffect(() => {
    httpRequest(BASE_URL, 'GET').then(boardList => {setRenderedBoards(boardList)});
  },[])

  const handleDelete = async (id) => {
    setRenderedBoards(renderedBoards.filter(element => element.id !== id));
    const BOARD_URL = new URL(`boards/${id}`,BASE_URL)
    await httpRequest(BOARD_URL,'DELETE')
  }

  const handleCreate = async (newData) => {
    const newBoard = await httpRequest(BASE_URL, 'POST', newData);
    setRenderedBoards([...renderedBoards,newBoard]);
  }

  const filterData = async (type) => {
    const filteredData = await filterBoards(type);
    setRenderedBoards(filteredData);
  }

  const searchData = (searchTerm) => {
    const searchedData = searchForSubstring(renderedBoards, searchTerm);
    setRenderedBoards(searchedData);
  }

  return (
    <div className={!darkMode ? 'dark': 'light'}>
      <Header />
      <Navagation onFilter={filterData} onSearch={searchData}/>
      <BoardList data={renderedBoards} onDelete={handleDelete} onCreate={handleCreate}/>
      <Footer />
    </div>
  )
}

export default App
