import '../styles/BoardList.css'
import BoardCard from './BoardCard';

export default function BoardList({ data }) {

    return (
        <div>
            <button>Create a New Board</button>

            <section className='board-list'>
                {data.map((board) => {
                    return <BoardCard board={board} key={board.id}/>
                })}
            </section>

        </div>
    );

}