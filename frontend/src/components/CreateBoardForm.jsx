import { useState } from 'react';
import '../styles/CreateBoardForm.css'

export default function CreateBoardForm() {

    return (
        <section className="modalHidden" >
            <article className="modalContent" > 
                <span className='close' >X</span>
                <h2>Create New Board</h2>
                <p>Title:</p>
                <input type="text" /><br />
                <p>Catagory</p>
                <input type="text" /><br />
                <p>Author:</p>
                <input type="text" /><br />
                <button>Create Board</button>
            </article>
        </section>
    );
}