import '../styles/BoardCard.css'
import BoardButtons from "./BoardButtons";
import { useContext } from 'react';
import { darkModeContext, DarkModeProvider } from './DarkModeProvider';
import '../styles/DarkMode.css'


const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BoardCard({ board, onDelete }) {

    const {darkMode} = useContext(darkModeContext)
    
    const BOARD_URL = new URL(`boards/${board.id}`,BASE_URL)

    return (
        <article className={darkMode? 'board-card dark-card' : 'board-card light-card'}>
            <img src={board.img} alt="" />
            <h3>{board.title}</h3>
            <p>{board.type}</p>
            <BoardButtons id={board.id} onDelete={onDelete}/>
        </article>
    );

}