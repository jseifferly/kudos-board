import '../styles/BoardHeader.css'
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

export default function BoardHeader({boardTitle}) {

    const {darkMode, toggleDarkMode} = useContext(darkModeContext)

    return (
        <header className={darkMode ? 'dark-header' : 'light-header'}>
            <img src="../public/medal.svg" alt="" />
            <h1>Kudo Boards</h1>
            <h2>{boardTitle}</h2>
        </header>
    );

}