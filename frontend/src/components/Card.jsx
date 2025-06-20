import '../styles/Card.css'
import CardButtons from "./CardButtons";
import { useContext, useState } from 'react';
import { darkModeContext} from './DarkModeProvider';
import {httpRequest} from '../utils/utils.js'
import '../styles/DarkMode.css'

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Card({card, onDelete, onUpvote, onOpen, boardId, onUpdate}) {

    const {darkMode} = useContext(darkModeContext)

    const[pinned, setPinned] = useState(card.pinned)

    const handlePin = async() => {
        const CARD_URL = new URL(`boards/${boardId}/cards/${card.id}`,BASE_URL)
        const BODY = {pinned: !pinned, pinnedAt: new Date()};
        await httpRequest(CARD_URL,"PUT",BODY).then(onUpdate)

        setPinned(!pinned);
    }

    return (
        <article className={darkMode? 'card dark-card' : 'card light-card'}>
            <img className={pinned ? 'pin-icon pinned' : 'pin-icon unpinned'} src="/pin.png" alt="PIN" onClick={handlePin}/>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <img className='card-gif' src={card.gif} alt="Card Gif" />
            <CardButtons id={card.id} numUpvotes={card.votes} onDelete={onDelete} onUpvote={onUpvote} onOpen={onOpen}/>
        </article>
    );
}