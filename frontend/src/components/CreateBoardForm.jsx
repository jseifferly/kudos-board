import '../styles/CreateBoardForm.css'
import { useState } from 'react';

const newBoard = {
        title: '',
        type: '',
        author: '',
        img: '/medal.svg'
    }

export default function CreateBoardForm({ modalDisplay, onClose, onCreate }) {

    const [formData, setFormData] = useState(newBoard);

    const handleInputChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSelectedChange = evt => {
        setFormData({
            ...formData,
            type: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        setFormData(newBoard)
        onCreate(formData);
        onClose();
    }

    return (
        <section className={modalDisplay} onSubmit={handleSubmit}>
            <form className="modalContent" > 
                <span className='close' onClick={onClose}>X</span>
                <h2>Create New Board</h2>
                <p>Title:</p>
                <input  type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                /><br />
                <p>Catagory</p>
                <select
                        value={formData.type}
                        onChange={handleSelectedChange}
                        defaultValue=""
                        required>
                <option value="" disabled hidden>Sort By</option>
                <option name="type" value="Celebration">Celebration</option>
                <option name="type" value="Thank You">Thank You</option>
                <option name="type" value="Inspiration">Inspiration</option>
                </select><br />
                <p>Author:</p>
                <input  type="text" 
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                /><br />
                <input type="submit"  value="Create New Board"/>
            </form>
        </section>
    );
}