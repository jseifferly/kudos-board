import '../styles/Header.css'
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

export default function Header() {

    const {darkMode, toggleDarkMode} = useContext(darkModeContext)

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <header className={darkMode ? 'dark-header' : 'light-header'}>
            <img src="/medal.svg" alt="" />
            <h1>Kudos Board</h1>
            <button onClick={handleClick}>Dark Mode</button>
        </header>
    );

}