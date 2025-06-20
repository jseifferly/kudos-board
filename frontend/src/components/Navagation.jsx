import '../styles/Navagation.css'
import SearchBar from './SearchBar';
import Filters from './Filters';
import { useContext } from 'react';
import { darkModeContext, DarkModeProvider } from './DarkModeProvider';
import '../styles/DarkMode.css'

export default function Navagation({ onFilter, onSearch }) {

    const {darkMode} = useContext(darkModeContext)

    return (
        <nav className={darkMode ? 'dark' : 'light'}>
            <SearchBar search={onSearch} filter={onFilter}/>
            <Filters filter={onFilter}/>
        </nav> 
    );

}