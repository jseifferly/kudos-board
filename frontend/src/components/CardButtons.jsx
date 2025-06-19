export default function CardButtons({ numUpvotes }) {

    return (
        <div>
            <button>Upvote: {numUpvotes}</button>
            <button>Delete</button>
        </div>
    );
}