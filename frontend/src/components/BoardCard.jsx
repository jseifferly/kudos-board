import '../styles/BoardCard.css'
import BoardButtons from "./BoardButtons";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BoardCard({ board, onDelete }) {
    
    const BOARD_URL = new URL(`boards/${board.id}`,BASE_URL)

    return (
        <article className='board-card'>
            <img src={board.img} alt="" />
            <h3>{board.title}</h3>
            <p>{board.type}</p>
            <BoardButtons id={board.id} onDelete={onDelete}/>
        </article>
    );

}