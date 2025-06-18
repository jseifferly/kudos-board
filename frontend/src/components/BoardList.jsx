import '../styles/BoardList.css'
import { useState } from 'react';
import BoardCard from './BoardCard';
import CreateBoardForm from './CreateBoardForm';

export default function BoardList({ data }) {
    
    return (
        <div>
            <button>Create a New Board</button>
            <CreateBoardForm />

            <section className='board-list'>
                {data.map((board) => {
                    return <BoardCard board={board} key={board.id}/>
                })}
            </section>

        </div>
    );

}