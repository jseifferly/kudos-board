import '../styles/BoardCard.css'
import BoardButtons from "./BoardButtons";

export default function BoardCard({ board }) {

    return (
        <article className='board-card'>
            <img src={board.img} alt="" />
            <h3>{board.title}</h3>
            <p>{board.type}</p>
            <BoardButtons />
        </article>
    );

}