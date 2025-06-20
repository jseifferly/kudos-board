import '../styles/CardButtons.css'

export default function CardButtons({ id, numUpvotes, onDelete, onUpvote, onOpen }) {

    return (
        <div className="card-buttons">
            <button onClick={() => onUpvote(id, ++numUpvotes)}>Upvote: {numUpvotes}</button>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onOpen(id)}>Comments</button>
        </div>
    );
}