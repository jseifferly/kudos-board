import '../styles/Card.css'
import CardButtons from "./CardButtons";

export default function Card({card, onDelete}) {

    return (
        <article className='card'>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <img src={card.gif} alt="Card Gif" />
            <CardButtons id={card.id} numUpvotes={card.votes} onDelete={onDelete}/>
        </article>
    );
}