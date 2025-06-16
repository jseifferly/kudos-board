import '../styles/BoardList.css'
import BoardCard from './BoardCard';

export default function BoardList() {

    return (
        <div>
            <button>Create a New Board</button>
            <section className='board-list'>
                <BoardCard />
            </section>
        </div>
    );

}