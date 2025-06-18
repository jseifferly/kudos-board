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
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required>
                <option value="Celebration">Celebration</option>
                <option value="Thank You">Thank You</option>
                <option value="Inspiration">Inspiration</option>
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