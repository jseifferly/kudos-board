import '../styles/CreateBoardForm.css'
import { httpRequest } from '../utils/utils';
import Card from './Card';
import CommentBox from './CommentBox';
import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function CommentModal({boardId, modalDisplay, card, onClose}) {

    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('')
    const [cardComments, setCardComments] = useState([])

    useEffect(() => {
        if(card){
            setCardComments(card.comments)
        }
    },[card])

    const handleMessageChange = (evt) => {
        setComment(evt.target.value)
    }

    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value)
    }

    const clearInputs = () => {
        setComment('');
        setAuthor('')
    }

    const postComment = async () => {

        let sender = 'Anonymous'
        if(author !== ''){
            sender = author;
        }
        const message = `${sender}: ${comment}`;
        card.comments.push(message)

        const CARD_URL = new URL(`boards/${boardId}/cards/${card.id}`,BASE_URL)
        const BODY = {comments: card.comments};
        await httpRequest(CARD_URL,"PUT",BODY)

        clearInputs();
    }
    
    if(card){
        console.log(card);
        return(
            <section className={modalDisplay}>
                <div className="modalContent"> 
                        <span className='close' onClick={() => {onClose(); clearInputs()}}>X</span>
                    <img src={card.gif} alt="GIF" />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>{card.owner}</p>
                    <CommentBox comments={cardComments}/>
                    <input type="text" name="message" placeholder='comment...' value={comment} onChange={handleMessageChange}/>
                    <input type="text" name="author" placeholder='author(optional)...' value={author} onChange={handleAuthorChange}/>
                    <button onClick={postComment}>Send</button>
                </div>  
            </section>
        );
    }

}