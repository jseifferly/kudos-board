import './App.css'
import Header from './components/Header'
import Navagation from './components/Navagation'
import BoardList from './components/BoardList'
import Footer from './components/Footer'

import data from './data/data'

function App() {

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
