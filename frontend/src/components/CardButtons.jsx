export default function CardButtons({ id, numUpvotes, onDelete }) {

    return (
        <div>
            <button>Upvote: {numUpvotes}</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}