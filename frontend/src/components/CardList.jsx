import '../styles/CardList.css'
import Card from "./Card";
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

export default function CardList({ cards, onDelete, onUpvote, onOpen, boardId }) {

    const {darkMode} = useContext(darkModeContext)

    if(cards.length){
        return (
            <div className={darkMode? 'card-content dark' : 'card-content light'}>
                <div className='card-list'>
                    <section className='card-list'>
                        {cards.map((card) => {
                            return <Card card={card} key={card.id} onDelete={onDelete} onUpvote={onUpvote} onOpen={onOpen} boardId={boardId}/>
                        })}
                    </section>
                </div>
            </div>
        );
    }

    return(
        <div className={darkMode ? 'card-content dark' : 'card-content light'}>
            <h2>No Cards Found....</h2>
        </div>
    );
}