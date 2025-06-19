import { useState } from "react";
import { gifFetch } from "../utils/utils";
import GifContainer from "./GifContainer";
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
    const [gifQuery, setGifQuery] = useState('');
    const [gifData, setGifData] = useState([]);

    const handleInputChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleGifChange = evt => {
        setGifQuery(evt.target.value)
    }

    const handleGifSearch = async () => {
        await gifFetch(gifQuery).then(data => {setGifData(data.data)});
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
                        value={gifQuery}
                        onChange={handleGifChange}
                        placeholder="Search GIFs..."
                /><br />

                <GifContainer gifs={gifData} />
                {//on Search gif conatiner goes here}
}
                <button type="button" onClick={handleGifSearch}>Search</button><br />
                <input  type="text" 
                        name="gif-url"
                        value={gifQuery}
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