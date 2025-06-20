import '../styles/Footer.css'
import { useContext } from 'react';
import { darkModeContext, DarkModeProvider } from './DarkModeProvider';
import '../styles/DarkMode.css'

export default function Footer() {

    const {darkMode} = useContext(darkModeContext)

    return (
        <footer className={darkMode? 'dark-header' : 'light-header'}>
            <p>https://github.com/jseifferly/kudos-board</p>
        </footer>
    );

}