import { Link } from "react-router"
import '../styles/BoardButtons.css'

export default function BoardButtons({ id, onDelete }) {

    return(
        <div className="board-buttons">
            <Link to={`/board/${id}`} className="view-board-button">View Board</Link>
            <button onClick={() => onDelete(id)} className="delete-board-button">Delete Board</button>
        </div>
    );

}