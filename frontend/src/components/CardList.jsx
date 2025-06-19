import '../styles/CardList.css'
import Card from "./Card";

export default function CardList({ cards }) {

    if(cards.length){
        return (
            <div>
                <section className='card-list'>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id}/>
                    })}
                </section>
            </div>
        );
    }

    return(
        <h2>No Cards Found....</h2>
    );
}