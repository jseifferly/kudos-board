import '../styles/CardList.css'
import Card from "./Card";

export default function CardList({ cards, onDelete }) {

    if(cards.length){
        return (
            <div>
                <section className='card-list'>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} onDelete={onDelete}/>
                    })}
                </section>
            </div>
        );
    }

    return(
        <h2>No Cards Found....</h2>
    );
}