import '../styles/NewCardButton.css'
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

export default function NewCardButton({ onOpen }) {

    const {darkMode} = useContext(darkModeContext)

    return (
        <div className={darkMode? 'new-card-button dark' : 'new-card-button light'}>
            <button onClick={onOpen}>Create A Card</button>
        </div>
    );
}