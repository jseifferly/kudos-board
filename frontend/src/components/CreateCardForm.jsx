import { useState } from "react";
import '../styles/CreateBoardForm.css'


export default function CreateCardForm({ modalDisplay, boardID, onClose, onCreate }) {
    
    const newCard = {
            title: '',
            description: '',
            owner: '',
            gif: '/medal.svg',
            boardID: {boardID}
        }

    const [formData, setFormData] = useState(newCard);
    const [gifURL, setGifURL] = useState('');

    const handleInputChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        setFormData(newCard)
        onCreate(formData);
        onClose();
    }

    return (
        <div>
            <section className={modalDisplay} onSubmit={handleSubmit}>
            <form className="modalContent" > 
                <span className='close' onClick={onClose}>X</span>
                <h2>Create A New Card</h2>
                <input  type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter Card Title..."
                        required
                /><br />
                <input  type="text" 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter Card description..."
                        required
                /><br />
                <input  type="text" 
                        name="gif-search"
                        value={gifURL}
                        onChange={handleInputChange}
                        placeholder="Search GIFs..."
                /><br />
                <button>Search</button><br />
                <input  type="text" 
                        name="gif-url"
                        value={gifURL}
                        onChange={handleInputChange}
                        placeholder="Enter GIF URL..."
                /><br />
                <button>Copy GIF URL</button><br />
                <input  type="text" 
                        name="owner"
                        value={formData.owner}
                        onChange={handleInputChange}
                        placeholder="Enter Card Owner (Optional)"
                        required
                /><br />
                <input type="submit"  value="Create Card"/>
            </form>
        </section>
        </div>
    );
}