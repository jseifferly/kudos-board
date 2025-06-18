import '../styles/BoardList.css'
import { useState } from 'react';
import BoardCard from './BoardCard';
import CreateBoardForm from './CreateBoardForm';

export default function BoardList({ data, onDelete, onCreate }) {

    const [displayForm, setDisplayForm] = useState('modalHidden')
    
    const showForm = () => {
        setDisplayForm('modalDisplay')
    }

    const closeForm = () => {
        setDisplayForm('modalHidden')
    }

    if(data){
    return (
            <div>
                <button onClick={showForm}>Create a New Board</button>
                <CreateBoardForm modalDisplay={displayForm} onClose={closeForm} onCreate={onCreate}/>

                <section className='board-list'>
                    {data.map((board) => {
                        return <BoardCard board={board} key={board.id} onDelete={onDelete}/>
                    })}
                </section>

            </div>
        );
    }

    return(
        <div>
            <p>No Data</p>
        </div>
    )

}