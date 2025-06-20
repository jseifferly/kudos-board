import '../styles/Card.css'
import CardButtons from "./CardButtons";
import { useContext } from 'react';
import { darkModeContext, DarkModeProvider } from './DarkModeProvider';
import '../styles/DarkMode.css'

export default function Card({card, onDelete, onUpvote, onOpen}) {

    const {darkMode} = useContext(darkModeContext)

    return (
        <article className={darkMode? 'card dark-card' : 'card light-card'}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <img src={card.gif} alt="Card Gif" />
            <CardButtons id={card.id} numUpvotes={card.votes} onDelete={onDelete} onUpvote={onUpvote} onOpen={onOpen}/>
        </article>
    );
}