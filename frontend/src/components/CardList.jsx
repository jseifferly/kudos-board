import '../styles/CardList.css'
import Card from "./Card";
import { darkModeContext } from './DarkModeProvider.jsx';
import { useContext } from 'react'
import '../styles/DarkMode.css'

export default function CardList({ cards, onDelete, onUpvote }) {

    const {darkMode, toggleDarkMode} = useContext(darkModeContext)

    if(cards.length){
        return (
            <div className={darkMode ? 'card-list dark' : 'card-list light'}>
                <section className='card-list'>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} onDelete={onDelete} onUpvote={onUpvote}/>
                    })}
                </section>
            </div>
        );
    }

    return(
        <div className={darkMode ? 'card-list dark' : 'card-list light'}>
            <h2>No Cards Found....</h2>
        </div>
    );
}